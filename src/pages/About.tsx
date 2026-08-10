import { useStoreState } from '../store/useState.ts';

function About() {
    const { count, component } = useStoreState();
    return (
        <div>
            <h1>About Page</h1>
            <p>count: { count }</p>
            <p>component: { component }</p>
        </div>
    );
}

export default About;