import { defineComponent, ref } from 'vue';
export default defineComponent({     
	setup() {  
		const props = {
			type: 'dark',
			icon: '/devops-white.svg',
			rightIcon: '/banner-icon-2.svg',
			name: 'Test',
			desc: 'test',
		}    
		return () => (
			<div>
				<banner {...props}></banner>
			</div>
		);     
	},
});