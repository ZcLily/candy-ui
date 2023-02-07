import { defineComponent, ref, watch, computed } from 'vue';
import PropTypes from 'vue-types';
import { buttonOption } from './interface/index'
import styles from './tabs.module.less'
import classNames from 'classnames';

export default defineComponent({
  name: 'tabs',
  props: {
    options: PropTypes.array.def([]),
    value: PropTypes.any,
    onChange: PropTypes.func
  },
  emits: ['update:value', 'change'],
  setup(props, {emit}) {
    const tabsValue = ref(props.value)
    const handleChange = (val: any) => {
      tabsValue.value = val

    };
    watch(
      computed(() => props.value),
      () => {
        tabsValue.value = props.value
      },
    );
    watch(
      tabsValue,
      () => {
        const value = tabsValue.value
        emit('update:value', value)
        const option = props.options.find((item: any) => item.label === value)
        emit('change', option)
      },
      { immediate: true },
    );
    return {
      tabsValue,
      handleChange
    }
  },
  render() {
    const { options } = this

    return (
      <el-radio-group
        model-value={this.tabsValue}
        onChange={this.handleChange}
        >
        {
          options.map((option: any) => (
            <el-radio-button label={option.label} key={option.label} disabled={option.disabled}></el-radio-button>
          ))
        }
      </el-radio-group>
    )
  }
})