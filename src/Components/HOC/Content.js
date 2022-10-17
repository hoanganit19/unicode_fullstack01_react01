import React, {memo} from 'react'
import { PreventRender } from './PreventRender';

function Content() {
    console.log('re-render');
  return (
    <h2>Content</h2>
  )
}

export default memo(Content);