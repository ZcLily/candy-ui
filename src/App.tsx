import { defineComponent } from 'vue';
import BannerDemo from '@/components/Banner/demo'
import TabsDemo from '@/components/Tabs/demo'
export default defineComponent({     
	setup() {     
		return () => (
			<div>
				<BannerDemo></BannerDemo>
				<TabsDemo></TabsDemo>
			</div>
		);     
	},
});