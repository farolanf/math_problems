import { StatusBar } from 'expo-status-bar'
import { useState } from 'react';
import { SafeAreaView } from 'react-native'
import ProblemView from './components/ProblemView'
import TopBar from './components/TopBar'
import styles from './styles'

export default function App() {
    const [problems, setProblems] = useState([
        {
            title: 'Grape Story 3.4A',
            body: `Three friends want to share four. If each friend gets one apple, how many will be left over? We start with 4 apples, but lose 3. How many are left?`,
            state: 'skipped',
        },
        {
            title: 'Grape Story 3.5A',
            body: `There are 5 ducks swimming in a pond. 3 more ducks join them. How many ducks are there now? We start with 5 ducks and then add three more ducks. How many ducks are there total?`,
            state: 'correct',
        },
        {
            title: 'Grape Story 3.6A',
            body: `Emily has 2 pencils and her sister gives her 1 more pencil. How many pencils does Emily have now? She started with 2 pencils and got 1 more. How many does she have now?`,
            state: 'wrong',
        },
    ])
    const [problemIndex, setProblemIndex] = useState(0)
    const problem = problems[problemIndex]
    const steps = problems.map((p, i) => ({ state: p.state, current: i === problemIndex }))

    const handleNextProblem = () => {
        setProblemIndex((problemIndex + 1) % problems.length)
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={styles.statusBar.backgroundColor} barStyle="light-content" />
            <TopBar title={problem.title} steps={steps} />
            <ProblemView body={problem.body} onNext={handleNextProblem} />
        </SafeAreaView>
    )
}
