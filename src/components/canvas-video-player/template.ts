import { createStyle } from '@biotope/element';
import * as styles from './index.scss';

interface CanvasVideoPlayerTemplateData {

}

export default (render: Function, data: CanvasVideoPlayerTemplateData) => {
    return render`
        ${createStyle(styles)}
        <div>Fill me</div>
    `;
}
