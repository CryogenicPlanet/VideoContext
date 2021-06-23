declare module '@cryogenicplanet/videocontext/Definitions/aaf_video_crop/aaf_video_crop' {
  export default aaf_video_crop;
  namespace aaf_video_crop {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export namespace properties {
          export const cropLeft: {
              type: string;
              value: number;
          };
          export const cropRight: {
              type: string;
              value: number;
          };
          export const cropTop: {
              type: string;
              value: number;
          };
          export const cropBottom: {
              type: string;
              value: number;
          };
      }
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/Definitions/aaf_video_flip/aaf_video_flip' {
  export default aaf_video_flip;
  namespace aaf_video_flip {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export const properties: {};
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/Definitions/aaf_video_flop/aaf_video_flop' {
  export default aaf_video_flop;
  namespace aaf_video_flop {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export const properties: {};
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/Definitions/aaf_video_position/aaf_video_position' {
  export default aaf_video_position;
  namespace aaf_video_position {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export namespace properties {
          export const positionOffsetX: {
              type: string;
              value: number;
          };
          export const positionOffsetY: {
              type: string;
              value: number;
          };
      }
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/Definitions/aaf_video_scale/aaf_video_scale' {
  export default aaf_video_scale;
  namespace aaf_video_scale {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export namespace properties {
          export const scaleX: {
              type: string;
              value: number;
          };
          export const scaleY: {
              type: string;
              value: number;
          };
      }
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/Definitions/colorThreshold/colorThreshold' {
  export default colorThreshold;
  namespace colorThreshold {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export namespace properties {
          export const a: {
              type: string;
              value: number;
          };
          export const colorAlphaThreshold: {
              type: string;
              value: number[];
          };
      }
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/Definitions/combine/combine' {
  export default combine;
  namespace combine {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export namespace properties {
          export const a: {
              type: string;
              value: number;
          };
      }
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/Definitions/crop/crop' {
  export default crop;
  namespace crop {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export namespace properties {
          export const x: {
              type: string;
              value: number;
          };
          export const y: {
              type: string;
              value: number;
          };
          export const width: {
              type: string;
              value: number;
          };
          export const height: {
              type: string;
              value: number;
          };
      }
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/Definitions/crossfade/crossfade' {
  export default crossfade;
  namespace crossfade {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export namespace properties {
          export const mix: {
              type: string;
              value: number;
          };
      }
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/Definitions/definitions' {
  export default DEFINITIONS;
  namespace DEFINITIONS {
      export { aaf_video_scale as AAF_VIDEO_SCALE };
      export { crossfade as CROSSFADE };
      export { dreamfade as DREAMFADE };
      export { horizontalWipe as HORIZONTAL_WIPE };
      export { verticalWipe as VERTICAL_WIPE };
      export { randomDissolve as RANDOM_DISSOLVE };
      export { staticDissolve as STATIC_DISSOLVE };
      export { staticEffect as STATIC_EFFECT };
      export { toColorAndBackFade as TO_COLOR_AND_BACK };
      export { starWipe as STAR_WIPE };
      export { combine as COMBINE };
      export { colorThreshold as COLORTHRESHOLD };
      export { monochrome as MONOCHROME };
      export { horizontalBlur as HORIZONTAL_BLUR };
      export { verticalBlur as VERTICAL_BLUR };
      export { aaf_video_crop as AAF_VIDEO_CROP };
      export { aaf_video_position as AAF_VIDEO_POSITION };
      export { aaf_video_flip as AAF_VIDEO_FLIP };
      export { aaf_video_flop as AAF_VIDEO_FLOP };
      export { opacity as OPACITY };
      export { crop as CROP };
  }
  import aaf_video_scale from "@cryogenicplanet/videocontext/Definitions/aaf_video_scale/aaf_video_scale";
  import crossfade from "@cryogenicplanet/videocontext/Definitions/crossfade/crossfade";
  import dreamfade from "@cryogenicplanet/videocontext/Definitions/dreamfade/dreamfade";
  import horizontalWipe from "@cryogenicplanet/videocontext/Definitions/horizontalWipe/horizontalWipe";
  import verticalWipe from "@cryogenicplanet/videocontext/Definitions/verticalWipe/verticalWipe";
  import randomDissolve from "@cryogenicplanet/videocontext/Definitions/randomDissolve/randomDissolve";
  import staticDissolve from "@cryogenicplanet/videocontext/Definitions/staticDissolve/staticDissolve";
  import staticEffect from "@cryogenicplanet/videocontext/Definitions/staticEffect/staticEffect";
  import toColorAndBackFade from "@cryogenicplanet/videocontext/Definitions/toColorAndBackFade/toColorAndBackFade";
  import starWipe from "@cryogenicplanet/videocontext/Definitions/starWipe/starWipe";
  import combine from "@cryogenicplanet/videocontext/Definitions/combine/combine";
  import colorThreshold from "@cryogenicplanet/videocontext/Definitions/colorThreshold/colorThreshold";
  import monochrome from "@cryogenicplanet/videocontext/Definitions/monochrome/monochrome";
  import horizontalBlur from "@cryogenicplanet/videocontext/Definitions/horizontalBlur/horizontalBlur";
  import verticalBlur from "@cryogenicplanet/videocontext/Definitions/verticalBlur/verticalBlur";
  import aaf_video_crop from "@cryogenicplanet/videocontext/Definitions/aaf_video_crop/aaf_video_crop";
  import aaf_video_position from "@cryogenicplanet/videocontext/Definitions/aaf_video_position/aaf_video_position";
  import aaf_video_flip from "@cryogenicplanet/videocontext/Definitions/aaf_video_flip/aaf_video_flip";
  import aaf_video_flop from "@cryogenicplanet/videocontext/Definitions/aaf_video_flop/aaf_video_flop";
  import opacity from "@cryogenicplanet/videocontext/Definitions/opacity/opacity";
  import crop from "@cryogenicplanet/videocontext/Definitions/crop/crop";

}
declare module '@cryogenicplanet/videocontext/Definitions/dreamfade/dreamfade' {
  export default dreamfade;
  namespace dreamfade {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export namespace properties {
          export const mix: {
              type: string;
              value: number;
          };
      }
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/Definitions/horizontalBlur/horizontalBlur' {
  export default horizontal_blur;
  namespace horizontal_blur {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export namespace properties {
          export const blurAmount: {
              type: string;
              value: number;
          };
      }
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/Definitions/horizontalWipe/horizontalWipe' {
  export default horizontal_wipe;
  namespace horizontal_wipe {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export namespace properties {
          export const mix: {
              type: string;
              value: number;
          };
      }
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/Definitions/monochrome/monochrome' {
  export default monochrome;
  namespace monochrome {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export namespace properties {
          export const inputMix: {
              type: string;
              value: number[];
          };
          export const outputMix: {
              type: string;
              value: number[];
          };
      }
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/Definitions/opacity/opacity' {
  export default opacity;
  namespace opacity {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export namespace properties {
          export const opacity: {
              type: string;
              value: number;
          };
      }
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/Definitions/randomDissolve/randomDissolve' {
  export default randomDissolve;
  namespace randomDissolve {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export namespace properties {
          export const mix: {
              type: string;
              value: number;
          };
      }
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/Definitions/starWipe/starWipe' {
  export default starWipe;
  namespace starWipe {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export namespace properties {
          export const mix: {
              type: string;
              value: number;
          };
      }
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/Definitions/staticDissolve/staticDissolve' {
  export default staticDissolve;
  namespace staticDissolve {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export namespace properties {
          export const mix: {
              type: string;
              value: number;
          };
      }
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/Definitions/staticEffect/staticEffect' {
  export default staticEffect;
  namespace staticEffect {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export namespace properties {
          export const weight: {
              type: string;
              value: number[];
          };
          export const amount: {
              type: string;
              value: number;
          };
      }
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/Definitions/toColorAndBackFade/toColorAndBackFade' {
  export default toColorAndBackFade;
  namespace toColorAndBackFade {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export namespace properties {
          export const mix: {
              type: string;
              value: number;
          };
          export const color: {
              type: string;
              value: number[];
          };
      }
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/Definitions/verticalBlur/verticalBlur' {
  export default verticalBlur;
  namespace verticalBlur {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export namespace properties {
          export const blurAmount: {
              type: string;
              value: number;
          };
      }
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/Definitions/verticalWipe/verticalWipe' {
  export default verticalWipe;
  namespace verticalWipe {
      export const title: string;
      export const description: string;
      export { vertexShader };
      export { fragmentShader };
      export namespace properties {
          export const mix: {
              type: string;
              value: number;
          };
      }
      export const inputs: string[];
  }

}
declare module '@cryogenicplanet/videocontext/DestinationNode/destinationnode' {
  export { TYPE as DESTINATIONTYPE };
  export default DestinationNode;
  const TYPE: "DestinationNode";
  class DestinationNode extends ProcessingNode {
      /**
       * Initialise an instance of a DestinationNode.
       *
       * There should only be a single instance of a DestinationNode per VideoContext instance. An VideoContext's destination can be accessed like so: videoContext.desitnation.
       *
       * You should not instantiate this directly.
       */
      constructor(gl: any, renderGraph: any);
  }
  import ProcessingNode from "@cryogenicplanet/videocontext/ProcessingNodes/processingnode";

}
declare module '@cryogenicplanet/videocontext/ProcessingNodes/compositingnode' {
  export { TYPE as COMPOSITINGTYPE };
  export default CompositingNode;
  const TYPE: "CompositingNode";
  class CompositingNode extends ProcessingNode {
      /**
       * Initialise an instance of a Compositing Node. You should not instantiate this directly, but use VideoContest.createCompositingNode().
       */
      constructor(gl: any, renderGraph: any, definition: any);
      _placeholderTexture: any;
  }
  import ProcessingNode from "@cryogenicplanet/videocontext/ProcessingNodes/processingnode";

}
declare module '@cryogenicplanet/videocontext/ProcessingNodes/effectnode' {
  export { TYPE as EFFECTYPE };
  export default EffectNode;
  const TYPE: "EffectNode";
  class EffectNode extends ProcessingNode {
      /**
       * Initialise an instance of an EffectNode. You should not instantiate this directly, but use VideoContest.createEffectNode().
       */
      constructor(gl: any, renderGraph: any, definition: any);
      _placeholderTexture: any;
  }
  import ProcessingNode from "@cryogenicplanet/videocontext/ProcessingNodes/processingnode";

}
declare module '@cryogenicplanet/videocontext/ProcessingNodes/processingnode' {
  export { TYPE as PROCESSINGTYPE };
  export default ProcessingNode;
  const TYPE: "ProcessingNode";
  class ProcessingNode extends GraphNode {
      /**
       * Initialise an instance of a ProcessingNode.
       *
       * This class is not used directly, but is extended to create CompositingNodes, TransitionNodes, and EffectNodes.
       */
      constructor(gl: any, renderGraph: any, definition: any, inputNames: any, limitConnections: any);
      _vertexShader: any;
      _fragmentShader: any;
      _definition: any;
      _properties: {};
      _shaderInputsTextureUnitMapping: any[];
      _maxTextureUnits: any;
      _boundTextureUnits: number;
      _texture: any;
      _program: any;
      _framebuffer: any;
      _currentTimeLocation: any;
      _currentTime: number;
      /**
       * Sets the passed processing node property to the passed value.
       * @param {string} name - The name of the processing node parameter to modify.
       * @param {Object} value - The value to set it to.
       *
       * @example
       * var ctx = new VideoContext();
       * var monoNode = ctx.effect(VideoContext.DEFINITIONS.MONOCHROME);
       * monoNode.setProperty("inputMix", [1.0,0.0,0.0]); //Just use red channel
       */
      setProperty(name: string, value: any): void;
      /**
       * Sets the passed processing node property to the passed value.
       * @param {string} name - The name of the processing node parameter to get.
       *
       * @example
       * var ctx = new VideoContext();
       * var monoNode = ctx.effect(VideoContext.DEFINITIONS.MONOCHROME);
       * console.log(monoNode.getProperty("inputMix")); //Will output [0.4,0.6,0.2], the default value from the effect definition.
       *
       */
      getProperty(name: string): any;
      _update(currentTime: any): void;
      _seek(currentTime: any): void;
      _render(): void;
  }
  import GraphNode from "@cryogenicplanet/videocontext/graphnode";

}
declare module '@cryogenicplanet/videocontext/ProcessingNodes/transitionnode' {
  export { TYPE as TRANSITIONTYPE };
  export default TransitionNode;
  const TYPE: "TransitionNode";
  class TransitionNode extends EffectNode {
      /**
       * Initialise an instance of a TransitionNode. You should not instantiate this directly, but use VideoContest.createTransitonNode().
       */
      constructor(gl: any, renderGraph: any, definition: any);
      _transitions: {};
      _initialPropertyValues: {};
      _doesTransitionFitOnTimeline(testTransition: any): boolean;
      _insertTransitionInTimeline(transition: any): void;
      /**
       * Create a transition on the timeline.
       *
       * @param {number} startTime - The time at which the transition should start (relative to currentTime of video context).
       * @param {number} endTime - The time at which the transition should be completed by (relative to currentTime of video context).
       * @param {number} currentValue - The value to start the transition at.
       * @param {number} targetValue - The value to transition to by endTime.
       * @param {String} propertyName - The name of the property to clear transitions on, if undefined default to "mix".
       *
       * @return {Boolean} returns True if a transition is successfully added, false otherwise.
       */
      transition(startTime: number, endTime: number, currentValue: number, targetValue: number, propertyName?: string): boolean;
      /**
       * Create a transition on the timeline at an absolute time.
       *
       * @param {number} startTime - The time at which the transition should start (relative to time 0).
       * @param {number} endTime - The time at which the transition should be completed by (relative to time 0).
       * @param {number} currentValue - The value to start the transition at.
       * @param {number} targetValue - The value to transition to by endTime.
       * @param {String} propertyName - The name of the property to clear transitions on, if undefined default to "mix".
       *
       * @return {Boolean} returns True if a transition is successfully added, false otherwise.
       */
      transitionAt(startTime: number, endTime: number, currentValue: number, targetValue: number, propertyName?: string): boolean;
      /**
       * Clear all transistions on the passed property. If no property is defined clear all transitions on the node.
       *
       * @param {String} propertyName - The name of the property to clear transitions on, if undefined clear all transitions on the node.
       */
      clearTransitions(propertyName: string): void;
      /**
       * Clear a transistion on the passed property that the specified time lies within.
       *
       * @param {String} propertyName - The name of the property to clear a transition on.
       * @param {number} time - A time which lies within the property you're trying to clear.
       *
       * @return {Boolean} returns True if a transition is removed, false otherwise.
       */
      clearTransition(propertyName: string, time: number): boolean;
  }
  import EffectNode from "@cryogenicplanet/videocontext/ProcessingNodes/effectnode";

}
declare module '@cryogenicplanet/videocontext/SourceNodes/audionode' {
  export { TYPE as AUDIOTYPE };
  export default AudioNode;
  const TYPE: "AudioNode";
  class AudioNode extends MediaNode {
      /**
       * Initialise an instance of an AudioNode.
       * This should not be called directly, but created through a call to videoContext.audio();
       */
      constructor(...args: any[]);
      _elementType: string;
  }
  import MediaNode from "@cryogenicplanet/videocontext/SourceNodes/medianode";

}
declare module '@cryogenicplanet/videocontext/SourceNodes/canvasnode' {
  export { TYPE as CANVASTYPE };
  export default CanvasNode;
  const TYPE: "CanvasNode";
  class CanvasNode extends SourceNode {
      /**
       * Initialise an instance of a CanvasNode.
       * This should not be called directly, but created through a call to videoContext.createCanvasNode();
       */
      constructor(canvas: any, gl: any, renderGraph: any, currentTime: any, preloadTime?: number);
      _preloadTime: number;
  }
  import SourceNode from "@cryogenicplanet/videocontext/SourceNodes/sourcenode";

}
declare module '@cryogenicplanet/videocontext/SourceNodes/imagenode' {
  export { TYPE as IMAGETYPE };
  export default ImageNode;
  const TYPE: "CanvasNode";
  class ImageNode extends SourceNode {
      /**
       * Initialise an instance of an ImageNode.
       * This should not be called directly, but created through a call to videoContext.createImageNode();
       */
      constructor(src: any, gl: any, renderGraph: any, currentTime: any, preloadTime?: number, attributes?: {});
      _preloadTime: number;
      _attributes: {};
      _textureUploaded: boolean;
      get elementURL(): string | MediaStream;
      _image: HTMLImageElement;
  }
  import SourceNode from "@cryogenicplanet/videocontext/SourceNodes/sourcenode";

}
declare module '@cryogenicplanet/videocontext/SourceNodes/medianode' {
  export default MediaNode;
  class MediaNode extends SourceNode {
      /**
       * Initialise an instance of a MediaNode.
       * This should not be called directly, but extended by other Node Types which use a `HTMLMediaElement`.
       */
      constructor(src: any, gl: any, renderGraph: any, currentTime: any, globalPlaybackRate?: number, sourceOffset?: number, preloadTime?: number, mediaElementCache?: any, attributes?: {});
      _preloadTime: number;
      _sourceOffset: number;
      _globalPlaybackRate: number;
      _mediaElementCache: any;
      _playbackRate: any;
      _playbackRateUpdated: boolean;
      _attributes: any;
      _loopElement: any;
      _isElementPlaying: boolean;
      set playbackRate(arg: any);
      get playbackRate(): any;
      get elementURL(): string | MediaStream;
      /**
       * @property {Boolean}
       * @summary - Check if the element is waiting on the network to continue playback
       */
      get _buffering(): boolean;
      set volume(arg: any);
      _triggerLoad(): void;
      _loadTriggered: boolean;
  }
  import SourceNode from "@cryogenicplanet/videocontext/SourceNodes/sourcenode";

}
declare module '@cryogenicplanet/videocontext/SourceNodes/nodes' {
  export default NODES;
  namespace NODES {
      export { AudioNode };
      export { CanvasNode };
      export { ImageNode };
      export { MediaNode };
      export { SourceNode };
      export { VideoNode };
  }
  import AudioNode from "@cryogenicplanet/videocontext/SourceNodes/audionode";
  import CanvasNode from "@cryogenicplanet/videocontext/SourceNodes/canvasnode";
  import ImageNode from "@cryogenicplanet/videocontext/SourceNodes/imagenode";
  import MediaNode from "@cryogenicplanet/videocontext/SourceNodes/medianode";
  import SourceNode from "@cryogenicplanet/videocontext/SourceNodes/sourcenode";
  import VideoNode from "@cryogenicplanet/videocontext/SourceNodes/videonode";

}
declare module '@cryogenicplanet/videocontext/SourceNodes/sourcenode' {
  export default SourceNode;
  namespace STATE {
      export const waiting: number;
      export const sequenced: number;
      export const playing: number;
      export const paused: number;
      export const ended: number;
      export const error: number;
  }
  const TYPE: "SourceNode";
  class SourceNode extends GraphNode {
      /**
       * Initialise an instance of a SourceNode.
       * This is the base class for other Nodes which generate media to be passed into the processing pipeline.
       */
      constructor(src: any, gl: any, renderGraph: any, currentTime: any);
      _element: any;
      _elementURL: string | MediaStream;
      _isResponsibleForElementLifeCycle: boolean;
      _state: any;
      _currentTime: any;
      _startTime: number;
      _stopTime: number;
      _ready: boolean;
      _loadCalled: boolean;
      _stretchPaused: any;
      _texture: any;
      _callbacks: any[];
      _renderPaused: boolean;
      /**
       * Returns the state of the node.
       * 0 - Waiting, start() has not been called on it yet.
       * 1 - Sequenced, start() has been called but it is not playing yet.
       * 2 - Playing, the node is playing.
       * 3 - Paused, the node is paused.
       * 4 - Ended, playback of the node has finished.
       *
       * @example
       * var ctx = new VideoContext();
       * var videoNode = ctx.createVideoSourceNode('video.mp4');
       * console.log(videoNode.state); //will output 0 (for waiting)
       * videoNode.start(5);
       * console.log(videoNode.state); //will output 1 (for sequenced)
       * videoNode.stop(10);
       * ctx.play();
       * console.log(videoNode.state); //will output 2 (for playing)
       * ctx.paused();
       * console.log(videoNode.state); //will output 3 (for paused)
       */
      get state(): any;
      /**
       * Returns the underlying DOM element which represents this source node.
       * Note: If a source node is created with a url rather than passing in an existing element then this will return undefined until the source node preloads the element.
       *
       * @return {Element} The underlying DOM element representing the media for the node. If the lifecycle of the video is owned UNSIGNED_BYTE the node itself, this can return undefined if the element hasn't been loaded yet.
       *
       * @example
       * //Accessing the Element on a VideoNode created via a URL
       * var ctx = new VideoContext();
       * var videoNode = ctx.createVideoSourceNode('video.mp4');
       * videoNode.start(0);
       * videoNode.stop(5);
       * //When the node starts playing the element should exist so set it's volume to 0
       * videoNode.regsiterCallback("play", function(){videoNode.element.volume = 0;});
       *
       *
       * @example
       * //Accessing the Element on a VideoNode created via an already existing element
       * var ctx = new VideoContext();
       * var videoElement = document.createElement("video");
       * var videoNode = ctx.createVideoSourceNode(videoElement);
       * videoNode.start(0);
       * videoNode.stop(5);
       * //The elemnt can be accessed any time because it's lifecycle is managed outside of the VideoContext
       * videoNode.element.volume = 0;
       *
       */
      get element(): Element;
      /**
       * Returns the duration of the node on a timeline. If no start time is set will return undefiend, if no stop time is set will return Infinity.
       *
       * @return {number} The duration of the node in seconds.
       *
       * @example
       * var ctx = new VideoContext();
       * var videoNode = ctx.createVideoSourceNode('video.mp4');
       * videoNode.start(5);
       * videoNode.stop(10);
       * console.log(videoNode.duration); //will output 10
       */
      get duration(): number;
      set stretchPaused(arg: any);
      get stretchPaused(): any;
      _load(): void;
      _unload(): void;
      /**
       * Register callbacks against one of these events: "load", "destroy", "seek", "pause", "play", "ended", "durationchange", "loaded", "error"
       *
       * @param {String} type - the type of event to register the callback against.
       * @param {function} func - the function to call.
       *
       * @example
       * var ctx = new VideoContext();
       * var videoNode = ctx.createVideoSourceNode('video.mp4');
       *
       * videoNode.registerCallback("load", function(){"video is loading"});
       * videoNode.registerCallback("play", function(){"video is playing"});
       * videoNode.registerCallback("ended", function(){"video has eneded"});
       *
       */
      registerCallback(type: string, func: Function): void;
      /**
       * Remove callback.
       *
       * @param {function} [func] - the callback to remove, if undefined will remove all callbacks for this node.
       *
       * @example
       * var ctx = new VideoContext();
       * var videoNode = ctx.createVideoSourceNode('video.mp4');
       *
       * videoNode.registerCallback("load", function(){"video is loading"});
       * videoNode.registerCallback("play", function(){"video is playing"});
       * videoNode.registerCallback("ended", function(){"video has eneded"});
       * videoNode.unregisterCallback(); //remove all of the three callbacks.
       *
       */
      unregisterCallback(func?: Function): void;
      _triggerCallbacks(type: any, data: any): void;
      /**
       * Start playback at VideoContext.currentTime plus passed time. If passed time is negative, will play as soon as possible.
       *
       * @param {number} time - the time from the currentTime of the VideoContext which to start playing, if negative will play as soon as possible.
       * @return {boolean} Will return true is seqeuncing has succeded, or false if it is already sequenced.
       */
      start(time: number): boolean;
      /**
       * Start playback at an absolute time ont the VideoContext's timeline.
       *
       * @param {number} time - the time on the VideoContexts timeline to start playing.
       * @return {boolean} Will return true is seqeuncing has succeded, or false if it is already sequenced.
       */
      startAt(time: number): boolean;
      get startTime(): number;
      /**
       * Stop playback at VideoContext.currentTime plus passed time. If passed time is negative, will play as soon as possible.
       *
       * @param {number} time - the time from the currentTime of the video context which to stop playback.
       * @return {boolean} Will return true is seqeuncing has succeded, or false if the playback has already ended or if start hasn't been called yet, or if time is less than the start time.
       */
      stop(time: number): boolean;
      /**
       * Stop playback at an absolute time ont the VideoContext's timeline.
       *
       * @param {number} time - the time on the VideoContexts timeline to stop playing.
       * @return {boolean} Will return true is seqeuncing has succeded, or false if the playback has already ended or if start hasn't been called yet, or if time is less than the start time.
       */
      stopAt(time: number): boolean;
      get stopTime(): number;
      _seek(time: any): void;
      _pause(): void;
      _play(): void;
      _isReady(): boolean;
      _update(currentTime: any, triggerTextureUpdate?: boolean): boolean;
      /**
       * Clear any timeline state the node currently has, this puts the node in the "waiting" state, as if neither start nor stop had been called.
       */
      clearTimelineState(): void;
  }
  import GraphNode from "@cryogenicplanet/videocontext/graphnode.js/index";
  export { STATE as SOURCENODESTATE, TYPE as SOURCETYPE };

}
declare module '@cryogenicplanet/videocontext/SourceNodes/videonode' {
  export { TYPE as VIDEOTYPE };
  export default VideoNode;
  const TYPE: "VideoNode";
  class VideoNode extends MediaNode {
      /**
       * Initialise an instance of a VideoNode.
       * This should not be called directly, but created through a call to videoContext.createVideoNode();
       */
      constructor(...args: any[]);
      _elementType: string;
  }
  import MediaNode from "@cryogenicplanet/videocontext/SourceNodes/medianode";

}
declare module '@cryogenicplanet/videocontext/exceptions' {
  export function ConnectException(message: any): void;
  export class ConnectException {
      constructor(message: any);
      message: any;
      name: string;
  }
  export function RenderException(message: any): void;
  export class RenderException {
      constructor(message: any);
      message: any;
      name: string;
  }

}
declare module '@cryogenicplanet/videocontext/graphnode' {
  export { TYPE as GRAPHTYPE };
  export default GraphNode;
  const TYPE: "GraphNode";
  class GraphNode {
      /**
       * Base class from which all processing and source nodes are derrived.
       */
      constructor(gl: any, renderGraph: any, inputNames: any, limitConnections?: boolean);
      _renderGraph: any;
      _limitConnections: boolean;
      _inputNames: any;
      _destroyed: boolean;
      _gl: any;
      _rendered: boolean;
      _displayName: string;
      /**
       * Get a string representation of the class name.
       *
       * @return String A string of the class name.
       */
      get displayName(): string;
      /**
       * Get the names of the inputs to this node.
       *
       * @return {String[]} An array of the names of the inputs ot the node.
       */
      get inputNames(): string[];
      /**
       * The maximum number of connections that can be made to this node. If there is not limit this will return Infinity.
       *
       * @return {number} The number of connections which can be made to this node.
       */
      get maximumConnections(): number;
      /**
       * Get an array of all the nodes which connect to this node.
       *
       * @return {GraphNode[]} An array of nodes which connect to this node.
       */
      get inputs(): GraphNode[];
      /**
       * Get an array of all the nodes which this node outputs to.
       *
       * @return {GraphNode[]} An array of nodes which this node connects to.
       */
      get outputs(): GraphNode[];
      /**
       * Get whether the node has been destroyed or not.
       *
       * @return {boolean} A true/false value of whather the node has been destoryed or not.
       */
      get destroyed(): boolean;
      /**
       * Connect this node to the targetNode
       *
       * @param {GraphNode} targetNode - the node to connect.
       * @param {(number| String)} [targetPort] - the port on the targetNode to connect to, this can be an index, a string identifier, or undefined (in which case the next available port will be connected to).
       *
       */
      connect(targetNode: GraphNode, targetPort?: (number | string)): any;
      /**
       * Disconnect this node from the targetNode. If targetNode is undefind remove all out-bound connections.
       *
       * @param {GraphNode} [targetNode] - the node to disconnect from. If undefined, disconnect from all nodes.
       *
       */
      disconnect(targetNode?: GraphNode): any;
      /**
       * Destory this node, removing it from the graph.
       */
      destroy(): void;
  }

}
declare module '@cryogenicplanet/videocontext/rendergraph' {
  export default RenderGraph;
  class RenderGraph {
      static outputEdgesFor(node: any, connections: any): any[];
      static inputEdgesFor(node: any, connections: any): any[];
      static getInputlessNodes(connections: any): any[];
      connections: any[];
      /**
       * Get a list of nodes which are connected to the output of the passed node.
       *
       * @param {GraphNode} node - the node to get the outputs for.
       * @return {GraphNode[]} An array of the nodes which are connected to the output.
       */
      getOutputsForNode(node: any): any[];
      /**
       * Get a list of nodes which are connected, by input name, to the given node. Array contains objects of the form: {"source":sourceNode, "type":"name", "name":inputName, "destination":destinationNode}.
       *
       * @param {GraphNode} node - the node to get the named inputs for.
       * @return {Object[]} An array of objects representing the nodes and connection type, which are connected to the named inputs for the node.
       */
      getNamedInputsForNode(node: any): any[];
      /**
       * Get a list of nodes which are connected, by z-index name, to the given node. Array contains objects of the form: {"source":sourceNode, "type":"zIndex", "zIndex":0, "destination":destinationNode}.
       *
       * @param {GraphNode} node - the node to get the z-index refernced inputs for.
       * @return {Object[]} An array of objects representing the nodes and connection type, which are connected by z-Index for the node.
       */
      getZIndexInputsForNode(node: any): any[];
      /**
       * Get a list of nodes which are connected as inputs to the given node. The length of the return array is always equal to the number of inputs for the node, with undefined taking the place of any inputs not connected.
       *
       * @param {GraphNode} node - the node to get the inputs for.
       * @return {GraphNode[]} An array of GraphNodes which are connected to the node.
       */
      getInputsForNode(node: any): any[];
      /**
       * Check if a named input on a node is available to connect too.
       * @param {GraphNode} node - the node to check.
       * @param {String} inputName - the named input to check.
       */
      isInputAvailable(node: any, inputName: string): boolean;
      /**
       * Register a connection between two nodes.
       *
       * @param {GraphNode} sourceNode - the node to connect from.
       * @param {GraphNode} destinationNode - the node to connect to.
       * @param {(String | number)} [target] - the target port of the conenction, this could be a string to specfiy a specific named port, a number to specify a port by index, or undefined, in which case the next available port will be connected to.
       * @return {boolean} Will return true if connection succeeds otherwise will throw a ConnectException.
       */
      registerConnection(sourceNode: any, destinationNode: any, target?: (string | number)): boolean;
      /**
       * Remove a connection between two nodes.
       * @param {GraphNode} sourceNode - the node to unregsiter connection from.
       * @param {GraphNode} destinationNode - the node to register connection to.
       * @return {boolean} Will return true if removing connection succeeds, or false if there was no connectionsction to remove.
       */
      unregisterConnection(sourceNode: any, destinationNode: any): boolean;
  }

}
declare module '@cryogenicplanet/videocontext/utils' {
  export function compileShader(gl: any, shaderSource: any, shaderType: any): any;
  export function createShaderProgram(gl: any, vertexShader: any, fragmentShader: any): any;
  export function createElementTexture(gl: any): any;
  export function updateTexture(gl: any, texture: any, element: any): void;
  export function clearTexture(gl: any, texture: any): void;
  export function generateRandomId(): string;
  export function exportToJSON(vc: any): string;
  export function snapshot(vc: any): {
      nodes: {
          destination: {
              type: string;
              inputs: {
                  id: string;
                  index: any;
              }[];
          };
      };
      videoContext: {
          currentTime: any;
          duration: any;
          state: any;
          playbackRate: any;
      };
  };
  export function createControlFormForNode(node: any, nodeName: any): HTMLDivElement;
  export function visualiseVideoContextGraph(videoContext: any, canvas: any): void;
  export function createSigmaGraphDataFromRenderGraph(videoContext: any): {
      nodes: {
          id: string;
          label: string;
          x: number;
          y: number;
          size: number;
          node: any;
      }[];
      edges: any[];
  };
  export function importSimpleEDL(ctx: any, playlist: any): any;
  export function visualiseVideoContextTimeline(videoContext: any, canvas: any, currentTime: any): void;
  export function mediaElementHasSource({ src, srcObject }: {
      src: any;
      srcObject: any;
  }): boolean;
  export class UpdateablesManager {
      _updateables: any[];
      _useWebworker: boolean;
      _active: boolean;
      _previousRAFTime: any;
      _previousWorkerTime: any;
      _webWorkerString: string;
      _webWorker: Worker;
      _initWebWorker(): void;
      _lostVisibility(): void;
      _gainedVisibility(): void;
      _init(): void;
      _updateWorkerTime(time: any): void;
      _updateRAFTime(time: any): void;
      _update(dt: any): void;
      register(updateable: any): void;
  }

}
declare module '@cryogenicplanet/videocontext/videocontext' {
  /**
   * VideoContext.
   * @module VideoContext
   */
  class VideoContext {
      static get DEFINITIONS(): {
          AAF_VIDEO_SCALE: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {
                  scaleX: {
                      type: string;
                      value: number;
                  };
                  scaleY: {
                      type: string;
                      value: number;
                  };
              };
              inputs: string[];
          };
          CROSSFADE: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {
                  mix: {
                      type: string;
                      value: number;
                  };
              };
              inputs: string[];
          };
          DREAMFADE: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {
                  mix: {
                      type: string;
                      value: number;
                  };
              };
              inputs: string[];
          };
          HORIZONTAL_WIPE: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {
                  mix: {
                      type: string;
                      value: number;
                  };
              };
              inputs: string[];
          };
          VERTICAL_WIPE: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {
                  mix: {
                      type: string;
                      value: number;
                  };
              };
              inputs: string[];
          };
          RANDOM_DISSOLVE: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {
                  mix: {
                      type: string;
                      value: number;
                  };
              };
              inputs: string[];
          };
          STATIC_DISSOLVE: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {
                  mix: {
                      type: string;
                      value: number;
                  };
              };
              inputs: string[];
          };
          STATIC_EFFECT: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {
                  weight: {
                      type: string;
                      value: number[];
                  };
                  amount: {
                      type: string;
                      value: number;
                  };
              };
              inputs: string[];
          };
          TO_COLOR_AND_BACK: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {
                  mix: {
                      type: string;
                      value: number;
                  };
                  color: {
                      type: string;
                      value: number[];
                  };
              };
              inputs: string[];
          };
          STAR_WIPE: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {
                  mix: {
                      type: string;
                      value: number;
                  };
              };
              inputs: string[];
          };
          COMBINE: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {
                  a: {
                      type: string;
                      value: number;
                  };
              };
              inputs: string[];
          };
          COLORTHRESHOLD: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {
                  a: {
                      type: string;
                      value: number;
                  };
                  colorAlphaThreshold: {
                      type: string;
                      value: number[];
                  };
              };
              inputs: string[];
          };
          MONOCHROME: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {
                  inputMix: {
                      type: string;
                      value: number[];
                  };
                  outputMix: {
                      type: string;
                      value: number[];
                  };
              };
              inputs: string[];
          };
          HORIZONTAL_BLUR: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {
                  blurAmount: {
                      type: string;
                      value: number;
                  };
              };
              inputs: string[];
          };
          VERTICAL_BLUR: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {
                  blurAmount: {
                      type: string;
                      value: number;
                  };
              };
              inputs: string[];
          };
          AAF_VIDEO_CROP: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {
                  cropLeft: {
                      type: string;
                      value: number;
                  };
                  cropRight: {
                      type: string;
                      value: number;
                  };
                  cropTop: {
                      type: string;
                      value: number;
                  };
                  cropBottom: {
                      type: string;
                      value: number;
                  };
              };
              inputs: string[];
          };
          AAF_VIDEO_POSITION: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {
                  positionOffsetX: {
                      type: string;
                      value: number;
                  };
                  positionOffsetY: {
                      type: string;
                      value: number;
                  };
              };
              inputs: string[];
          };
          AAF_VIDEO_FLIP: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {};
              inputs: string[];
          };
          AAF_VIDEO_FLOP: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {};
              inputs: string[];
          };
          OPACITY: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {
                  opacity: {
                      type: string;
                      value: number;
                  };
              };
              inputs: string[];
          };
          CROP: {
              title: string;
              description: string;
              vertexShader: any;
              fragmentShader: any;
              properties: {
                  x: {
                      type: string;
                      value: number;
                  };
                  y: {
                      type: string;
                      value: number;
                  };
                  width: {
                      type: string;
                      value: number;
                  };
                  height: {
                      type: string;
                      value: number;
                  };
              };
              inputs: string[];
          };
      };
      static get NODES(): {
          AudioNode: typeof AudioNode;
          CanvasNode: typeof CanvasNode;
          ImageNode: typeof ImageNode;
          MediaNode: typeof import("@cryogenicplanet/videocontext/SourceNodes/medianode.js/index").default;
          SourceNode: typeof import("@cryogenicplanet/videocontext/SourceNodes/sourcenode.js/index").default;
          VideoNode: typeof VideoNode;
      };
      /**
       * Initialise the VideoContext and render to the specific canvas. A 2nd parameter can be passed to the constructor which is a function that get's called if the VideoContext fails to initialise.
       *
       * @param {Canvas} canvas - the canvas element to render the output to.
       * @param {function} [initErrorCallback] - a callback for if initialising the canvas failed.
       * @param {Object} [options] - a number of custom options which can be set on the VideoContext, generally best left as default.
       * @param {boolean} [options.manualUpdate=false] - Make Video Context not use the updatable manager
       * @param {boolean} [options.endOnLastSourceEnd=true] - Trigger an `ended` event when the current time goes above the duration of the composition
       * @param {boolean} [options.useVideoElementCache=true] - Creates a pool of video element that will be all initialised at the same time. Important for mobile support
       * @param {number} [options.videoElementCacheSize=6] - Number of video element in the pool
       * @param {object} [options.webglContextAttributes] - A set of attributes used when getting the GL context. Alpha will always be `true`.
       *
       * @example
       * var canvasElement = document.getElementById("canvas");
       * var ctx = new VideoContext(canvasElement, () => console.error("Sorry, your browser dosen\'t support WebGL"));
       * var videoNode = ctx.video("video.mp4");
       * videoNode.connect(ctx.destination);
       * videoNode.start(0);
       * videoNode.stop(10);
       * ctx.play();
       *
       */
      constructor(canvas: any, initErrorCallback?: Function, { manualUpdate, endOnLastSourceEnd, useVideoElementCache, videoElementCacheSize, webglContextAttributes }?: {
          manualUpdate: boolean;
          endOnLastSourceEnd: boolean;
          useVideoElementCache: boolean;
          videoElementCacheSize: number;
          webglContextAttributes: object;
      });
      _canvas: any;
      _endOnLastSourceEnd: boolean;
      _gl: any;
      _useVideoElementCache: boolean;
      _videoElementCache: VideoElementCache;
      _id: any;
      _renderGraph: RenderGraph;
      _sourceNodes: any[];
      _processingNodes: any[];
      _timeline: any[];
      _currentTime: number;
      _state: any;
      _playbackRate: number;
      _volume: number;
      _sourcesPlaying: any;
      _destinationNode: DestinationNode;
      _callbacks: any;
      _timelineCallbacks: any[];
      /**
       * Set the ID of the VideoContext instance. This should be unique.
       */
      set id(arg: any);
      /**
       * Returns an ID assigned to the VideoContext instance. This will either be the same id as the underlying canvas element,
       * or a uniquely generated one.
       */
      get id(): any;
      /**
       * Register a callback to happen at a specific point in time.
       * @param {number} time - the time at which to trigger the callback.
       * @param {Function} func - the callback to register.
       * @param {number} ordering - the order in which to call the callback if more than one is registered for the same time.
       */
      registerTimelineCallback(time: number, func: Function, ordering?: number): void;
      /**
       * Unregister a callback which happens at a specific point in time.
       * @param {Function} func - the callback to unregister.
       */
      unregisterTimelineCallback(func: Function): void;
      /**
       * Register a callback to listen to one of the events defined in `VideoContext.EVENTS`
       *
       * @param {String} type - the event to register against.
       * @param {Function} func - the callback to register.
       *
       * @example
       * var canvasElement = document.getElementById("canvas");
       * var ctx = new VideoContext(canvasElement);
       * ctx.registerCallback(VideoContext.EVENTS.STALLED, () => console.log("Playback stalled"));
       * ctx.registerCallback(VideoContext.EVENTS.UPDATE, () => console.log("new frame"));
       * ctx.registerCallback(VideoContext.EVENTS.ENDED, () => console.log("Playback ended"));
       */
      registerCallback(type: string, func: Function): boolean;
      /**
       * Remove a previously registered callback
       *
       * @param {Function} func - the callback to remove.
       *
       * @example
       * var canvasElement = document.getElementById("canvas");
       * var ctx = new VideoContext(canvasElement);
       *
       * //the callback
       * var updateCallback = () => console.log("new frame");
       *
       * //register the callback
       * ctx.registerCallback(VideoContext.EVENTS.UPDATE, updateCallback);
       * //then unregister it
       * ctx.unregisterCallback(updateCallback);
       *
       */
      unregisterCallback(func: Function): boolean;
      _callCallbacks(type: any): void;
      /**
       * Get the canvas that the VideoContext is using.
       *
       * @return {HTMLCanvasElement} The canvas that the VideoContext is using.
       *
       */
      get element(): HTMLCanvasElement;
      /**
       * Get the current state.
       * @return {STATE} The number representing the state.
       *
       */
      get state(): STATE;
      /**
       * Set the progress through the internal timeline.
       * Setting this can be used as a way to implement a scrubbable timeline.
       *
       * @param {number} currentTime - this is the currentTime to set in seconds.
       *
       * @example
       * var canvasElement = document.getElementById("canvas");
       * var ctx = new VideoContext(canvasElement);
       * var videoNode = ctx.video("video.mp4");
       * videoNode.connect(ctx.destination);
       * videoNode.start(0);
       * videoNode.stop(20);
       * ctx.currentTime = 10; // seek 10 seconds in
       * ctx.play();
       *
       */
      set currentTime(arg: number);
      /**
       * Get how far through the internal timeline has been played.
       *
       * Getting this value will give the current playhead position. Can be used for updating timelines.
       * @return {number} The time in seconds through the current playlist.
       *
       * @example
       * var canvasElement = document.getElementById("canvas");
       * var ctx = new VideoContext(canvasElement);
       * var videoNode = ctx.video("video.mp4");
       * videoNode.connect(ctx.destination);
       * videoNode.start(0);
       * videoNode.stop(10);
       * ctx.play();
       * setTimeout(() => console.log(ctx.currentTime),1000); //should print roughly 1.0
       *
       */
      get currentTime(): number;
      /**
       * Get the time at which the last node in the current internal timeline finishes playing.
       *
       * @return {number} The end time in seconds of the last video node to finish playing.
       *
       * @example
       * var canvasElement = document.getElementById("canvas");
       * var ctx = new VideoContext(canvasElement);
       * console.log(ctx.duration); //prints 0
       *
       * var videoNode = ctx.video("video.mp4");
       * videoNode.connect(ctx.destination);
       * videoNode.start(0);
       * videoNode.stop(10);
       *
       * console.log(ctx.duration); //prints 10
       *
       * ctx.play();
       */
      get duration(): number;
      /**
       * Get the final node in the render graph which represents the canvas to display content on to.
       *
       * This proprety is read-only and there can only ever be one destination node. Other nodes can connect to this but you cannot connect this node to anything.
       *
       * @return {DestinationNode} A graph node representing the canvas to display the content on.
       * @example
       * var canvasElement = document.getElementById("canvas");
       * var ctx = new VideoContext(canvasElement);
       * var videoNode = ctx.video("video.mp4");
       * videoNode.start(0);
       * videoNode.stop(10);
       * videoNode.connect(ctx.destination);
       *
       */
      get destination(): DestinationNode;
      /**
       * Set the playback rate of the VideoContext instance.
       * This will alter the playback speed of all media elements played through the VideoContext.
       *
       * @param {number} rate - this is the playback rate.
       *
       * @example
       * var canvasElement = document.getElementById("canvas");
       * var ctx = new VideoContext(canvasElement);
       * var videoNode = ctx.video("video.mp4");
       * videoNode.start(0);
       * videoNode.stop(10);
       * videoNode.connect(ctx.destination);
       * ctx.playbackRate = 2;
       * ctx.play(); // Double playback rate means this will finish playing in 5 seconds.
       */
      set playbackRate(arg: number);
      /**
       *  Return the current playbackRate of the video context.
       * @return {number} A value representing the playbackRate. 1.0 by default.
       */
      get playbackRate(): number;
      /**
       * Set the volume of all MediaNode created in the VideoContext.
       * @param {number} volume - the volume to apply to the video nodes.
       */
      set volume(arg: number);
      /**
       * Return the current volume of the video context.
       * @return {number} A value representing the volume. 1.0 by default.
       */
      get volume(): number;
      /**
       * Start the VideoContext playing
       * @example
       * var canvasElement = document.getElementById("canvas");
       * var ctx = new VideoContext(canvasElement);
       * var videoNode = ctx.video("video.mp4");
       * videoNode.connect(ctx.destination);
       * videoNode.start(0);
       * videoNode.stop(10);
       * ctx.play();
       */
      play(): boolean;
      /**
       * Pause playback of the VideoContext
       * @example
       * var canvasElement = document.getElementById("canvas");
       * var ctx = new VideoContext(canvasElement);
       * var videoNode = ctx.video("video.mp4");
       * videoNode.connect(ctx.destination);
       * videoNode.start(0);
       * videoNode.stop(20);
       * ctx.currentTime = 10; // seek 10 seconds in
       * ctx.play();
       * setTimeout(() => ctx.pause(), 1000); //pause playback after roughly one second.
       */
      pause(): boolean;
      /**
       * Create a new node representing a video source
       *
       * @param {string|HTMLVideoElement|MediaStream} - The URL or video element to create the video from.
       * @param {number} [sourceOffset=0] - Offset into the start of the source video to start playing from.
       * @param {number} [preloadTime=4] - How many seconds before the video is to be played to start loading it.
       * @param {Object} [videoElementAttributes] - A dictionary of attributes to map onto the underlying video element.
       * @return {VideoNode} A new video node.
       *
       * @example
       * var canvasElement = document.getElementById("canvas");
       * var ctx = new VideoContext(canvasElement);
       * var videoNode = ctx.video("bigbuckbunny.mp4");
       */
      video(src: any, sourceOffset?: number, preloadTime?: number, videoElementAttributes?: any): VideoNode;
      /**
       * Create a new node representing an audio source
       * @param {string|HTMLAudioElement|MediaStream} src - The url or audio element to create the audio node from.
       * @param {number} [sourceOffset=0] - Offset into the start of the source audio to start playing from.
       * @param {number} [preloadTime=4] - How long before a node is to be displayed to attmept to load it.
       * @param {Object} [imageElementAttributes] - Any attributes to be given to the underlying image element.
       * @return {AudioNode} A new audio node.
       *
       * @example
       * var canvasElement = document.getElementById("canvas");
       * var ctx = new VideoContext(canvasElement);
       * var audioNode = ctx.audio("ziggystardust.mp3");
       */
      audio(src: string | HTMLAudioElement | MediaStream, sourceOffset?: number, preloadTime?: number, audioElementAttributes?: {}): AudioNode;
      /**
       * @deprecated
       */
      createVideoSourceNode(src: any, sourceOffset?: number, preloadTime?: number, videoElementAttributes?: {}): VideoNode;
      /**
       * Create a new node representing an image source
       * @param {string|Image|ImageBitmap} src - The url or image element to create the image node from.
       * @param {number} [preloadTime=4] - How long before a node is to be displayed to attmept to load it.
       * @param {Object} [imageElementAttributes] - Any attributes to be given to the underlying image element.
       * @return {ImageNode} A new image node.
       *
       * @example
       * var canvasElement = document.getElementById("canvas");
       * var ctx = new VideoContext(canvasElement);
       * var imageNode = ctx.image("image.png");
       *
       * @example
       * var canvasElement = document.getElementById("canvas");
       * var imageElement = document.getElementById("image");
       * var ctx = new VideoContext(canvasElement);
       * var imageNode = ctx.image(imageElement);
       */
      image(src: string | (new (width?: number, height?: number) => HTMLImageElement) | ImageBitmap, preloadTime?: number, imageElementAttributes?: any): ImageNode;
      /**
       * @deprecated
       */
      createImageSourceNode(src: any, sourceOffset?: number, preloadTime?: number, imageElementAttributes?: {}): ImageNode;
      /**
       * Create a new node representing a canvas source
       * @param {Canvas} src - The canvas element to create the canvas node from.
       * @return {CanvasNode} A new canvas node.
       */
      canvas(canvas: any): CanvasNode;
      /**
       * @deprecated
       */
      createCanvasSourceNode(canvas: any, sourceOffset?: number, preloadTime?: number): CanvasNode;
      /**
       * Create a new effect node.
       * @param {Object} definition - this is an object defining the shaders, inputs, and properties of the compositing node to create. Builtin definitions can be found by accessing VideoContext.DEFINITIONS.
       * @return {EffectNode} A new effect node created from the passed definition
       */
      effect(definition: any): EffectNode;
      /**
       * @deprecated
       */
      createEffectNode(definition: any): EffectNode;
      /**
       * Create a new compositiing node.
       *
       * Compositing nodes are used for operations such as combining multiple video sources into a single track/connection for further processing in the graph.
       *
       * A compositing node is slightly different to other processing nodes in that it only has one input in it's definition but can have unlimited connections made to it.
       * The shader in the definition is run for each input in turn, drawing them to the output buffer. This means there can be no interaction between the spearte inputs to a compositing node, as they are individually processed in seperate shader passes.
       *
       * @param {Object} definition - this is an object defining the shaders, inputs, and properties of the compositing node to create. Builtin definitions can be found by accessing VideoContext.DEFINITIONS
       *
       * @return {CompositingNode} A new compositing node created from the passed definition.
       *
       * @example
       *
       * var canvasElement = document.getElementById("canvas");
       * var ctx = new VideoContext(canvasElement);
       *
       * //A simple compositing node definition which just renders all the inputs to the output buffer.
       * var combineDefinition = {
       *     vertexShader : "\
       *         attribute vec2 a_position;\
       *         attribute vec2 a_texCoord;\
       *         varying vec2 v_texCoord;\
       *         void main() {\
       *             gl_Position = vec4(vec2(2.0,2.0)*vec2(1.0, 1.0), 0.0, 1.0);\
       *             v_texCoord = a_texCoord;\
       *         }",
       *     fragmentShader : "\
       *         precision mediump float;\
       *         uniform sampler2D u_image;\
       *         uniform float a;\
       *         varying vec2 v_texCoord;\
       *         varying float v_progress;\
       *         void main(){\
       *             vec4 color = texture2D(u_image, v_texCoord);\
       *             gl_FragColor = color;\
       *         }",
       *     properties:{
       *         "a":{type:"uniform", value:0.0},
       *     },
       *     inputs:["u_image"]
       * };
       * //Create the node, passing in the definition.
       * var trackNode = videoCtx.compositor(combineDefinition);
       *
       * //create two videos which will play at back to back
       * var videoNode1 = ctx.video("video1.mp4");
       * videoNode1.play(0);
       * videoNode1.stop(10);
       * var videoNode2 = ctx.video("video2.mp4");
       * videoNode2.play(10);
       * videoNode2.stop(20);
       *
       * //Connect the nodes to the combine node. This will give a single connection representing the two videos which can
       * //be connected to other effects such as LUTs, chromakeyers, etc.
       * videoNode1.connect(trackNode);
       * videoNode2.connect(trackNode);
       *
       * //Don't do anything exciting, just connect it to the output.
       * trackNode.connect(ctx.destination);
       *
       */
      compositor(definition: any): CompositingNode;
      /**
       * Instanciate a custom built source node
       * @param {SourceNode} CustomSourceNode
       * @param {Object} src
       * @param  {...any} options
       */
      customSourceNode(CustomSourceNode: any, src: any, ...options: any[]): any;
      /**
       * @depricated
       */
      createCompositingNode(definition: any): CompositingNode;
      /**
       * Create a new transition node.
       *
       * Transistion nodes are a type of effect node which have parameters which can be changed as events on the timeline.
       *
       * For example a transition node which cross-fades between two videos could have a "mix" property which sets the
       * progress through the transistion. Rather than having to write your own code to adjust this property at specfic
       * points in time a transition node has a "transition" function which takes a startTime, stopTime, targetValue, and a
       * propertyName (which will be "mix"). This will linearly interpolate the property from the curernt value to
       * tragetValue between the startTime and stopTime.
       *
       * @param {Object} definition - this is an object defining the shaders, inputs, and properties of the transition node to create.
       * @return {TransitionNode} A new transition node created from the passed definition.
       * @example
       *
       * var canvasElement = document.getElementById("canvas");
       * var ctx = new VideoContext(canvasElement);
       *
       * //A simple cross-fade node definition which cross-fades between two videos based on the mix property.
       * var crossfadeDefinition = {
       *     vertexShader : "\
       *        attribute vec2 a_position;\
       *        attribute vec2 a_texCoord;\
       *        varying vec2 v_texCoord;\
       *        void main() {\
       *            gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
       *            v_texCoord = a_texCoord;\
       *         }",
       *     fragmentShader : "\
       *         precision mediump float;\
       *         uniform sampler2D u_image_a;\
       *         uniform sampler2D u_image_b;\
       *         uniform float mix;\
       *         varying vec2 v_texCoord;\
       *         varying float v_mix;\
       *         void main(){\
       *             vec4 color_a = texture2D(u_image_a, v_texCoord);\
       *             vec4 color_b = texture2D(u_image_b, v_texCoord);\
       *             color_a[0] *= mix;\
       *             color_a[1] *= mix;\
       *             color_a[2] *= mix;\
       *             color_a[3] *= mix;\
       *             color_b[0] *= (1.0 - mix);\
       *             color_b[1] *= (1.0 - mix);\
       *             color_b[2] *= (1.0 - mix);\
       *             color_b[3] *= (1.0 - mix);\
       *             gl_FragColor = color_a + color_b;\
       *         }",
       *     properties:{
       *         "mix":{type:"uniform", value:0.0},
       *     },
       *     inputs:["u_image_a","u_image_b"]
       * };
       *
       * //Create the node, passing in the definition.
       * var transitionNode = videoCtx.transition(crossfadeDefinition);
       *
       * //create two videos which will overlap by two seconds
       * var videoNode1 = ctx.video("video1.mp4");
       * videoNode1.play(0);
       * videoNode1.stop(10);
       * var videoNode2 = ctx.video("video2.mp4");
       * videoNode2.play(8);
       * videoNode2.stop(18);
       *
       * //Connect the nodes to the transistion node.
       * videoNode1.connect(transitionNode);
       * videoNode2.connect(transitionNode);
       *
       * //Set-up a transition which happens at the crossover point of the playback of the two videos
       * transitionNode.transition(8,10,1.0,"mix");
       *
       * //Connect the transition node to the output
       * transitionNode.connect(ctx.destination);
       *
       * //start playback
       * ctx.play();
       */
      transition(definition: any): TransitionNode;
      /**
       * @deprecated
       */
      createTransitionNode(definition: any): TransitionNode;
      _isStalled(): boolean;
      /**
       * This allows manual calling of the update loop of the videoContext.
       *
       * @param {Number} dt - The difference in seconds between this and the previous calling of update.
       * @example
       *
       * var canvasElement = document.getElementById("canvas");
       * var ctx = new VideoContext(canvasElement, undefined, {"manualUpdate" : true});
       *
       * var previousTime;
       * function update(time){
       *     if (previousTime === undefined) previousTime = time;
       *     var dt = (time - previousTime)/1000;
       *     ctx.update(dt);
       *     previousTime = time;
       *     requestAnimationFrame(update);
       * }
       * update();
       *
       */
      update(dt: number): void;
      _update(dt: any): void;
      /**
       * Destroy all nodes in the graph and reset the timeline. After calling this any created nodes will be unusable.
       */
      reset(): void;
      _deprecate(msg: any): void;
      /**
       * Get a JS Object containing the state of the VideoContext instance and all the created nodes.
       */
      snapshot(): {
          nodes: {
              destination: {
                  type: string;
                  inputs: {
                      id: string;
                      index: any;
                  }[]; /**
                   * Get how far through the internal timeline has been played.
                   *
                   * Getting this value will give the current playhead position. Can be used for updating timelines.
                   * @return {number} The time in seconds through the current playlist.
                   *
                   * @example
                   * var canvasElement = document.getElementById("canvas");
                   * var ctx = new VideoContext(canvasElement);
                   * var videoNode = ctx.video("video.mp4");
                   * videoNode.connect(ctx.destination);
                   * videoNode.start(0);
                   * videoNode.stop(10);
                   * ctx.play();
                   * setTimeout(() => console.log(ctx.currentTime),1000); //should print roughly 1.0
                   *
                   */
              };
          };
          videoContext: {
              currentTime: any;
              duration: any;
              state: any;
              playbackRate: any;
          };
      };
  }
  namespace VideoContext {
      export { STATE };
      export { EVENTS };
      export { visualiseVideoContextTimeline };
      export { visualiseVideoContextGraph };
      export { createControlFormForNode };
      export { createSigmaGraphDataFromRenderGraph };
      export { exportToJSON };
      export { updateablesManager };
      export { importSimpleEDL };
  }
  export default VideoContext;
  /**
   * Video Context States
   */
  export type STATE = {
      /**
       * - All sources are active
       */
      PLAYING: number;
      /**
       * - All sources are paused
       */
      PAUSED: number;
      /**
       * - One or more sources is unable to play
       */
      STALLED: number;
      /**
       * - All sources have finished playing
       */
      ENDED: number;
      /**
       * - The render graph is in a broken state
       */
      BROKEN: number;
  };
  import VideoElementCache from "@cryogenicplanet/videocontext/videoelementcache.js/index";
  import RenderGraph from "@cryogenicplanet/videocontext/rendergraph.js/index";
  import DestinationNode from "@cryogenicplanet/videocontext/DestinationNode/destinationnode.js/index";
  import VideoNode from "@cryogenicplanet/videocontext/SourceNodes/videonode.js/index";
  import AudioNode from "@cryogenicplanet/videocontext/SourceNodes/audionode.js/index";
  import ImageNode from "@cryogenicplanet/videocontext/SourceNodes/imagenode.js/index";
  import CanvasNode from "@cryogenicplanet/videocontext/SourceNodes/canvasnode.js/index";
  import EffectNode from "@cryogenicplanet/videocontext/ProcessingNodes/effectnode.js/index";
  import CompositingNode from "@cryogenicplanet/videocontext/ProcessingNodes/compositingnode.js/index";
  import TransitionNode from "@cryogenicplanet/videocontext/ProcessingNodes/transitionnode.js/index";
  /**
   * Video Context States
   * @readonly
   * @typedef {Object} STATE
   * @property {number} STATE.PLAYING - All sources are active
   * @property {number} STATE.PAUSED - All sources are paused
   * @property {number} STATE.STALLED - One or more sources is unable to play
   * @property {number} STATE.ENDED - All sources have finished playing
   * @property {number} STATE.BROKEN - The render graph is in a broken state
   */
  const STATE: Readonly<{
      PLAYING: number;
      PAUSED: number;
      STALLED: number;
      ENDED: number;
      BROKEN: number;
  }>;
  /**
   * Video Context Events
   * @readonly
   * @typedef {Object} STATE
   * @property {string} STATE.UPDATE - Called any time a frame is rendered to the screen.
   * @property {string} STATE.STALLED - happens anytime the playback is stopped due to buffer starvation for playing assets.
   * @property {string} STATE.ENDED - Called once plackback has finished (i.e ctx.currentTime == ctx.duration).
   * @property {string} STATE.CONTENT - Called at the start of a time region where there is content playing out of one or more sourceNodes.
   * @property {number} STATE.NOCONTENT - Called at the start of any time region where the VideoContext is still playing, but there are currently no active playing sources.
   */
  const EVENTS: Readonly<{
      UPDATE: string;
      STALLED: string;
      ENDED: string;
      CONTENT: string;
      NOCONTENT: string;
  }>;
  import { visualiseVideoContextTimeline } from "@cryogenicplanet/videocontext/utils.js/index";
  import { visualiseVideoContextGraph } from "@cryogenicplanet/videocontext/utils.js/index";
  import { createControlFormForNode } from "@cryogenicplanet/videocontext/utils.js/index";
  import { createSigmaGraphDataFromRenderGraph } from "@cryogenicplanet/videocontext/utils.js/index";
  import { exportToJSON } from "@cryogenicplanet/videocontext/utils.js/index";
  let updateablesManager: UpdateablesManager;
  import { importSimpleEDL } from "@cryogenicplanet/videocontext/utils.js/index";
  import { UpdateablesManager } from "@cryogenicplanet/videocontext/utils.js/index";

}
declare module '@cryogenicplanet/videocontext/videoelementcache' {
  export default VideoElementCache;
  class VideoElementCache {
      constructor(cache_size?: number);
      _cacheItems: any[];
      _cacheItemsInitialised: boolean;
      init(): void;
      /**
       * Find and return an empty initialised element or, if the cache is
       * empty, create a new one.
       *
       * @param {Object} mediaNode A `MediaNode` instance
       */
      getElementAndLinkToNode(mediaNode: any): any;
      /**
       * Unlink any media node currently linked to a cached video element.
       *
       * @param {VideoElement} element The element to unlink from any media nodes
       */
      unlinkNodeFromElement(element: any): void;
      get length(): number;
      get unused(): number;
  }

}
declare module '@cryogenicplanet/videocontext/videoelementcacheitem' {
  export default VideoElementCacheItem;
  /**
   * A video element item created and managed by the `VideoElementCache`.
   *
   * This creates and stores a `<video />` element, which is assigned
   * to a `MediaNode` by the `VideoElementCache` for playback. Once
   * playback has completed the `MediaNode` association will be removed
   * and potentially replaced with another.
   */
  class VideoElementCacheItem {
      constructor(node?: any);
      _element: any;
      _node: any;
      _createElement(): HTMLVideoElement;
      set element(arg: any);
      get element(): any;
      linkNode(node: any): void;
      unlinkNode(): void;
      isPlaying(): boolean;
  }

}
declare module '@cryogenicplanet/videocontext' {
  import main = require('@cryogenicplanet/videocontext/videocontext');
  export = main;
}