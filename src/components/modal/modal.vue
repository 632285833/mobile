<template>
	<div class="modal-container" v-show="vis" @touchmove="onTouchmove">
		<transition name="push">
			<div class="modal" v-show="modalVis" ref="modal">
				<div class="modal-header" v-if="headerVis" ref="modalHeader">
					<slot name="header"></slot>
				</div>
				<div class="modal-body" ref="modalBody">
					<slot></slot>
				</div>
				<div class="modal-footer" ref="modalFooter" v-if="footerVis">
					<slot name="footer"></slot>
				</div>
			</div>
		</transition>
		<transition name="fade">
			<div class="modal-coat" v-show="modalVis" @click="close"></div>
		</transition>
	</div>
</template>
<script>
	export default {
		name: 'modal',
		props: {
			isFullHeight: {
				type: Boolean,
				default: false
			},
			vis: {
				type: Boolean,
				default: false
			},
			action: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				modalVis: false,
				headerVis: true,
				footerVis: true,
			}
		},
		watch: {
			vis(newVal, oldVal) {
				this.modalVis = newVal;

				let [modalHeader, modalFooter] = [this.$refs.modalHeader, this.$refs.modalFooter];
				if (modalFooter && Array.from(modalFooter.childNodes).length===0) {
					this.footerVis = false
				}
				if (modalHeader && Array.from(modalHeader.childNodes).length===0) {
					this.headerVis = false
				}

			}

		},
		methods: {
			handleCancel() {
				this.close()
			},
			close() {
				var self = this
				this.modalVis = false
				setTimeout(function(){
					self.$emit('close')
				},500)
			},
			updateHeight() {
				var refs = this.$refs;
				let [modal, modalHeader, modalBody, modalFooter] = [refs.modal, refs.modalHeader, refs.modalBody, refs.modalFooter];
				let [modal_h, header_h, body_h, footer_h, max_h] = [0, 0 , 0, 0, 0];
				if (modalHeader) { header_h = modalHeader.offsetHeight; }
				if (modalFooter) { footer_h = modalFooter.offsetHeight; }
				if (modal) { modal_h = modal.offsetHeight; }
				if (modalBody) { body_h = modalBody.offsetHeight; } else { return }
				max_h = modal_h-header_h-footer_h;

				if (modal_h>0) {
					if (body_h>=max_h) {
						modalBody.style.height = `${max_h}px`
					} else {
						modalBody.style.height = `auto`
					}
				}
			},
			onTouchmove() {
				
			}
		},
		mounted() {
			// this.updateHeight()
		},
		updated() {
			var _this = this;
			setTimeout(function() {
				_this.updateHeight()
			}, 50)
		}

	}
</script>
<style lang="scss" scoped>
	@import '../../../docs/scss/variables.scss';
	.push-enter-active, .push-leave-active, .fade-enter-active, .fade-leave-active {
		transition: all .35s;
	}
	.push-enter, .push-leave-to {
		transform: translateY(100%);
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}

</style>