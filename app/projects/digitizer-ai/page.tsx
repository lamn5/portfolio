import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Digitizer AI - Noddy Lam",
  description:
    "Building Digitizer-AI: Automating EEG Electrode Digitization with React, Three.js, and YOLOv8",
};

export default function DigitizerAIPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-6 py-24">
          {/* Back Link */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Three.js", "FastAPI", "YOLOv8", "Python"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Building Digitizer-AI: Automating EEG Electrode Digitization with
              React, Three.js, and YOLOv8
            </h1>
            <p className="text-xl text-gray-600">
              In neuroscience research, recording electrode positions from EEG
              caps is a tedious manual process that researchers have to repeat
              for every study participant. When I learned about this problem, I
              saw an opportunity to apply modern web technologies and machine
              learning to automate the entire workflow. The result is
              Digitizer-AI—a full-stack application that transforms multi-angle
              video recordings of electrode caps into precise 3D position data.
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-gray max-w-none space-y-8">
            <h2 className="font-bold mt-12">The Challenge</h2>
            <p>
              EEG studies use caps with up to 256 electrodes positioned across
              the scalp. Researchers need to digitize these electrode positions
              for accurate brain activity mapping, but manually recording
              coordinates is slow and error-prone. The challenge was to build a
              system that could:
            </p>
            <ul>
              <li>Process video recordings from multiple camera angles</li>
              <li>Automatically detect and classify hundreds of electrodes</li>
              <li>Output data in MATLAB format for scientific analysis</li>
              <li>
                Provide an intuitive interface that researchers could actually
                use
              </li>
            </ul>

            <h2 className="font-bold mt-16">The Tech Stack</h2>
            <p>
              For the frontend, I chose <strong>React 19</strong> with React
              Router to build a multi-step workflow that guides users through
              the entire process. The real star of the show is{" "}
              <strong>Three.js</strong>—a WebGL library that powers the
              interactive 3D visualization of electrode positions.
            </p>
            <p>
              The backend runs on <strong>FastAPI</strong>, a modern Python web
              framework that handles the heavy lifting: video processing with{" "}
              <strong>FFmpeg</strong>, electrode detection using{" "}
              <strong>YOLOv8</strong> (a state-of-the-art object detection
              model), and classification via <strong>Random Forest</strong>{" "}
              machine learning models. The entire stack communicates through a
              RESTful API with async operations for performance.
            </p>

            <h2 className="font-bold mt-16">The Frontend Journey: A Six-Step Workflow</h2>
            <p>
              Building the user interface was all about creating a logical flow
              that didn&apos;t overwhelm users with complexity. I designed six
              distinct pages, each handling a specific part of the pipeline.
            </p>

            <h3 className="font-bold mt-10">1. Subject Setup Form</h3>
            <p>
              The journey begins with a clean form where users enter a subject
              ID and select their electrode cap configuration (defaulting to
              GSN-256, the most common). I used localStorage to persist form
              state, so users never lose their progress if they need to step
              away.
            </p>
            <figure className="my-10">
              <Image
                src="/projects/digitizer-ai/subject-form.png"
                alt="Subject Setup Form showing electrode configuration dropdown and subject ID input"
                width={500}
                height={375}
                className="rounded-lg border border-gray-200 shadow-sm w-auto max-w-full"
              />
            </figure>

            <h3 className="font-bold mt-10">2. Video Upload</h3>
            <p>
              Next is the upload page with drag-and-drop functionality. Users
              can upload multiple videos, and the interface provides real-time
              feedback. I kept the UX simple—just drop your files and move
              forward. No complicated configuration needed.
            </p>
            <figure className="my-10">
              <Image
                src="/projects/digitizer-ai/video-upload.png"
                alt="Video upload interface with drag-and-drop zone and uploaded file list"
                width={500}
                height={375}
                className="rounded-lg border border-gray-200 shadow-sm w-auto max-w-full"
              />
            </figure>

            <h3 className="font-bold mt-10">3. Frame Capture: The Heart of the UI</h3>
            <p>
              This is where things get interesting. The CaptureFramePage is
              essentially a custom video scrubber that lets users extract frames
              from 11 different camera angles. Why 11? Because you need complete
              coverage of the electrode cap from all sides.
            </p>
            <p>
              I implemented keyboard shortcuts (arrow keys for frame-by-frame
              navigation, &apos;c&apos; to capture) because clicking through
              hundreds of frames gets tedious fast. The page displays reference
              angle images alongside the video, showing users exactly what each
              angle should look like. Captured frames appear in a thumbnail grid
              below, providing instant visual confirmation.
            </p>
            <p>
              The technical challenge here was managing state across 11
              different video angles while keeping the interface responsive.
              React&apos;s component lifecycle and efficient state management
              were crucial.
            </p>
            <figure className="my-10">
              <Image
                src="/projects/digitizer-ai/frame-capture.png"
                alt="Frame capture interface showing video player with reference angle thumbnails"
                width={600}
                height={450}
                className="rounded-lg border border-gray-200 shadow-sm w-auto max-w-full"
              />
            </figure>

            <h3 className="font-bold mt-10">4. Manual Labeling Interface</h3>
            <p>
              Once frames are captured, the backend runs YOLOv8 to detect all
              electrodes. But here&apos;s the clever part: the ML model detects
              two types—black reference electrodes and white unlabeled
              electrodes. Users manually label just 17 black electrodes through
              dropdown menus on the LabelPage.
            </p>
            <p>
              Why only 17? These serve as reference points. The Random Forest
              classifier then uses the distances between black and white
              electrodes to automatically classify the remaining 239+
              electrodes. This hybrid approach balances automation with
              accuracy—users provide minimal input, and ML handles the rest.
            </p>
            <figure className="my-10">
              <Image
                src="/projects/digitizer-ai/label-electrodes.png"
                alt="Manual labeling interface showing detected electrodes with reference diagram"
                width={600}
                height={450}
                className="rounded-lg border border-gray-200 shadow-sm w-auto max-w-full"
              />
            </figure>

            <h3 className="font-bold mt-10">5. 3D Visualization with Three.js</h3>
            <p>
              After classification, the real magic happens in the PointCloudPage.
              This is where I integrated Three.js to render all electrode
              positions as an interactive 3D point cloud.
            </p>
            <p>
              I wrote custom GLSL shaders to render each electrode as a sprite,
              allowing users to orbit around the electrode cap, zoom in for
              detail, and toggle between 2D and 3D views. The shader code
              handles sprite sizing, color, and ensures electrodes remain
              visible from all angles.
            </p>

            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
              <code>{`// Simplified shader setup
const material = new THREE.ShaderMaterial({
  vertexShader: electrodeVertexShader,
  fragmentShader: electrodeFragmentShader,
  uniforms: {
    pointSize: { value: 5.0 },
    color: { value: new THREE.Color(0x00ff00) }
  }
});`}</code>
            </pre>

            <p>
              The scene includes OrbitControls for intuitive camera
              manipulation—users can click and drag to rotate, scroll to zoom,
              and right-click to pan. It&apos;s the kind of interaction that feels
              natural once you try it.
            </p>
            <p>
              Users can also download the final MATLAB .mat file directly from
              this page—the ultimate deliverable for their research.
            </p>
            <figure className="my-10">
              <Image
                src="/projects/digitizer-ai/point-cloud.png"
                alt="3D point cloud visualization showing all electrode positions"
                width={500}
                height={375}
                className="rounded-lg border border-gray-200 shadow-sm w-auto max-w-full"
              />
            </figure>

            <h2 className="font-bold mt-16">The ML Pipeline</h2>
            <p>
              While the frontend handles user interaction, the backend
              orchestrates a sophisticated ML pipeline:
            </p>
            <ul>
              <li>
                <strong>YOLOv8 Detection:</strong> The ObjectDetector.py module
                runs Ultralytics&apos; YOLOv8 on all extracted frames, detecting
                electrode positions with different confidence thresholds for
                black (0.05) and white (0.30) electrodes.
              </li>
              <li>
                <strong>Eye Filtering:</strong> A separate YOLO11-pose model
                detects eyes and filters out any electrodes detected too close
                to them—these are usually false positives from reflections or
                shadows.
              </li>
              <li>
                <strong>Random Forest Classification:</strong> Using the
                manually labeled reference electrodes, the
                ElectrodeClassifier.py calculates inter-electrode distances and
                feeds them into pre-trained Random Forest models (40+
                classifiers, one per camera angle/configuration) to predict
                electrode IDs.
              </li>
              <li>
                <strong>MATLAB Output:</strong> Finally, create_mat.py packages
                everything into a .mat file with electrode positions, IDs, and
                metadata—ready for scientific analysis.
              </li>
            </ul>

            <h2 className="font-bold mt-16">Technical Highlights</h2>
            <p>Some challenges I&apos;m proud of solving:</p>
            <ul>
              <li>
                <strong>Frame-to-frame tracking:</strong> Implemented the
                Hungarian algorithm with Thin Plate Spline (TPS) transformations
                to maintain electrode identity across frames
              </li>
              <li>
                <strong>Async architecture:</strong> FastAPI with
                ThreadPoolExecutor (8 workers) for parallel image processing
              </li>
              <li>
                <strong>State persistence:</strong> localStorage + React Router
                ensures users never lose progress
              </li>
              <li>
                <strong>Responsive 3D rendering:</strong> Three.js scene
                optimization for smooth interaction even with 256+ points
              </li>
            </ul>

            <h2 className="font-bold mt-16">The Impact</h2>
            <p>
              What started as a research tool has become a complete automation
              pipeline. Tasks that once took researchers 30+ minutes per subject
              now take under 5 minutes—and with greater accuracy. The 3D
              visualization also helps researchers validate results at a glance,
              something impossible with raw coordinate data.
            </p>
            <p>
              Building Digitizer-AI taught me that the best technical solutions
              aren&apos;t always about using the fanciest tech—they&apos;re about
              understanding the user&apos;s workflow and crafting an interface that
              makes complex processes feel simple. Whether it&apos;s keyboard
              shortcuts on the frame capture page or the intuitive 3D controls,
              every decision was made with the researcher&apos;s experience in mind.
            </p>
            <p>
              The project is still evolving, but the core pipeline is solid, the
              UI is refined, and researchers are already using it.
            </p>
          </div>
        </article>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
