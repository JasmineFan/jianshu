import { createGlobalStyle } from 'styled-components'
import a from './iconfont.woff2'
import b from './iconfont.woff'
import c from './iconfont.ttf'


export const GlobalStyleIcon = createGlobalStyle`
@font-face {
  font-family: "iconfont"; /* Project id 3647766 */
  src: url('${a}?t=1663768421984') format('woff2'),
       url('${b}?t=1663768421984') format('woff'),
       url('${c}?t=1663768421984') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`




