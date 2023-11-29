import Lights from './Lights.jsx'
import Level from './Level.jsx'
import { Physics } from '@react-three/rapier'
import Player from './Player.jsx'
import useGame from './stores/useGame.jsx'

export default function Experience() {
    const blockCount = useGame((state) => {return state.blocksCount})
    const blocksSeed = useGame(state => state.blocksSeed)

    return <>
        <color args={ [ '#bdedfc' ] } attach="background" />
        <Physics debug={false}>
            <Lights />

            <Level count={blockCount} seed={ blocksSeed }/>
            <Player />
        </Physics>
    </>
}