import ExpoModulesCore

public class ExpoVideoComposerModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoVideoComposer")

    // Function API (unchanged)
    AsyncFunction("render") { (options: RenderOptions) -> String in
      let url = try Composer.render(options: options)
      return url.absoluteString
    }

    // View API (props + events)
    View(ExpoVideoComposerView.self) {
      // Props
      Prop("images") { (view: ExpoVideoComposerView, value: [String]) in
        view.images = value; view.maybeStart()
      }
      Prop("audioUri") { (view: ExpoVideoComposerView, value: String?) in
        view.audioUri = value; view.maybeStart()
      }
      Prop("duration") { (view: ExpoVideoComposerView, value: Double) in
        view.duration = value
      }
      Prop("fps") { (view: ExpoVideoComposerView, value: Int) in
        view.fps = value
      }
      Prop("width") { (view: ExpoVideoComposerView, value: Int) in
        view.width = value
      }
      Prop("height") { (view: ExpoVideoComposerView, value: Int) in
        view.height = value
      }
      Prop("crossfade") { (view: ExpoVideoComposerView, value: Double) in
        view.crossfade = value
      }
      Prop("autoStart") { (view: ExpoVideoComposerView, value: Bool) in
        view.autoStart = value; view.maybeStart()
      }

      // Events
      Events("onComplete", "onError")
    }
  }
}

// MARK: - Options bridging (used by function API and the view)
struct RenderOptions: Record {
  @Field var images: [String] = []
  @Field var audioUri: String? = nil
  @Field var duration: Double = 15.0
  @Field var fps: Int = 30
  @Field var width: Int = 1080
  @Field var height: Int = 1920
  @Field var crossfade: Double = 0.5
}