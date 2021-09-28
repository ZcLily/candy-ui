import { defineComponent } from 'vue';
import styles from './HelloWorld.module.less';

export default defineComponent({    
    name: 'hello-world',    
    props: { msg: String},    
    setup(props: any) {     
        return () => <h1 class={styles.helloWorld}>{props.msg}</h1>;    
    },
})