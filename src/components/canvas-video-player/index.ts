import Component from '@biotope/element';
import template from './template';

interface CanvasVideoPlayerProps {

}

interface CanvasVideoPlayerState {

}

class CanvasVideoPlayer extends Component< CanvasVideoPlayerProps, CanvasVideoPlayerState > {
    static componentName = 'canvas-video-player';

    render() {
        return template(
            this.html, {}
        );
    }
}

CanvasVideoPlayer.componentName = 'canvas-video-player';
CanvasVideoPlayer.register();