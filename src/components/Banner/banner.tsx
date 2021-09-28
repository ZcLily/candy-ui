import { defineComponent } from 'vue';
import styles from './banner.module.less'
import classnames from 'classnames'
import { isString } from 'lodash'

export default defineComponent({
  name: 'banner',
  props: {
    type: {
      type: String,
      default: 'light'
    },
    icon: {
      type: String,
      default: 'appcenter'
    },
    rightIcon: {
      type: String || HTMLElement,
      default: ''
    },
    className: String,
    iconClass: String,
    name: String,
    desc: String,
    extra: String
  },
  setup(props) {
    return {}
  },

  methods: {
    renderRightIcon() {
      const { rightIcon } = this
  
      if (!rightIcon) return null
  
      if (isString(rightIcon)) {
        return <img class={styles.rightIcon} src={require(`@/assets${rightIcon}`)} alt="" />
      }
    },
    renderExtraInfo() {
      const { extra } = this
  
      if (!extra) return null
  
      return extra
    }
  },

  render() {
    const { className, iconClass, type, icon, name, desc } = this

    const isImage = icon && icon.startsWith('/')

    return (
      <div class={classnames(styles.banner, className, styles[type])}>
        { this.renderRightIcon() }
        <div class={classnames(styles.icon, iconClass)}>
          {isImage ? (
            <img src={require(`@/assets${icon}`)} alt="" />
          ) : ''}
        </div>
        <div class={styles.title}>
          <div class="h3">{name}</div>
          <p>{desc}</p>
        </div>
        {this.renderExtraInfo()}
      </div>
    )
  }
})