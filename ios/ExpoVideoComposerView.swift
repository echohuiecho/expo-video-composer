import ExpoModulesCore
import UIKit

public class ExpoVideoComposerView: ExpoView {
  // Props stored on the view instance
  var images: [String] = []
  var audioUri: String? = nil
  var duration: Double = 15
  var fps: Int = 30
  var width: Int = 1080
  var height: Int = 1920
  var crossfade: Double = 0.5
  var autoStart: Bool = false

  private var didStart = false
  private let spinner = UIActivityIndicatorView(style: .medium)

  required public init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)
    spinner.hidesWhenStopped = true
    addSubview(spinner)
  }

  public override func layoutSubviews() {
    super.layoutSubviews()
    spinner.center = CGPoint(x: bounds.midX, y: bounds.midY)
  }

  func maybeStart() {
    guard autoStart, !didStart, images.count >= 2 else { return }
    didStart = true
    DispatchQueue.main.async { self.spinner.startAnimating() }

    var opts = RenderOptions()
    opts.images = images
    opts.audioUri = audioUri
    opts.duration = duration
    opts.fps = fps
    opts.width = width
    opts.height = height
    opts.crossfade = crossfade

    DispatchQueue.global(qos: .userInitiated).async {
      do {
        let url = try Composer.render(options: opts)
        DispatchQueue.main.async {
          self.spinner.stopAnimating()
          self.sendEvent("onComplete", ["url": url.absoluteString])
        }
      } catch {
        DispatchQueue.main.async {
          self.spinner.stopAnimating()
          self.sendEvent("onError", ["message": String(describing: error)])
        }
      }
    }
  }
}