<template>
	<div class="my-family-page table-list-container page has-footer">
		<ul class="table-list line-stripe">
			<router-link tag="li" to="addAdult" class="tlr">
 				<div class="tlr-title color-primary">添加成人</div>
 			</router-link>
 			<router-link tag="li" to="addChild" class="tlr">
 				<div class="tlr-title color-primary">添加儿童</div>
 			</router-link>
 			<li v-for="guest in guestArr" :class="{'checkbox-table': isSelectGuests}" class="tlr indent">
				<div class="tlr-title">
				    <span>{{guest.name}}</span>
				    <div class="inline-label"><span>{{guest.role}}</span></div>
			    </div>
				<div class="tlr-content">
					<span>手机号：{{guest.mobile}}<br></span>
					<span>身份证号：{{guest.id}}<br></span>
				</div>
				<uCheckbox class="v-center"></uCheckbox>
			</li>
		</ul>
		<footerBar class="solo" v-show="isSelectGuests">
			<uButton class="save-button" :path="'paymentResult'">保存</uButton>
		</footerBar>
	</div>
</template>
<script>
	export default {
		props: {
			isSelectGuests: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				guestArr: [{
					name: '张宇华',
					mobile: '13809879485',
					id: '389091198004987689',
					role: '萌爸'
				},{
					name: '田小萌',
					mobile: '13809879485',
					id: '389091198004987689',
					role: '萌妈'
				},{
					name: '张雨菲',
					mobile: '13809879485',
					id: '389091198004987689',
					role: '萌娃'
				},{
					name: '张启毅',
					mobile: '13809879485',
					id: '389091198004987689',
					role: '萌娃'
				}]
			}
		}
	}
</script>