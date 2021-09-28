import { defineComponent, ref } from 'vue';
export default defineComponent({     
	setup() { 
    const value = '有状态副本集'
    const options = [
      { label: '部署', disabled: false },
      { label: '有状态副本集', disabled: false },
      { label: '守护进程集', disabled: false },
    ]
    const onChange = (val: string) => {
      // console.log(val)
    }
		return () => (
			<div>
				<tabs value={value} options={options} onChange={onChange}></tabs>
			</div>
		);     
	},
});