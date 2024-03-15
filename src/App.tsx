import { PresentationControls, Stage, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const Model = (props) => {
	const { scene } = useGLTF("../public/bmw.glb")
	return <primitive object={scene} scale={0.01} {...props} />
}

function App() {
	return (
		<>
			<div id="canvas-container">
				<Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
					<color attach="background" args={["#101010"]} />
					<PresentationControls speed={1.5} global polar={[-0.1, Math.PI / 4]}>
						<Stage environment={"sunset"}>
							<ambientLight intensity={1} />
							{/* <mesh>
								<boxGeometry args={[0.05, 0.05, 0.05]} />
								<meshStandardMaterial color="red" />
							</mesh> */}
							<Model scale={0.01} />
						</Stage>
					</PresentationControls>
				</Canvas>
			</div>
		</>
	)
}

export default App
