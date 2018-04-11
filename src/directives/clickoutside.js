export default {
    bind: function(el, binding, vnode) {
        function documentHandler (e) {
            if (el.contains(e.target)) {
                return false;
            }
            if (binding.expression) {
                binding.value(e);
            }
        }
        el.documentHandler = documentHandler;
        document.addEventListener('click', documentHandler);
    },
    unbind: function(el, binding) {
        document.removeEventListener('click', el.documentHandler);
        delete el.documentHandler;
    }
};