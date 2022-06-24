import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();

    return (
        <div className="pt-5">
            <div className="row pt-5">
                <div className="col-md-7">
                    <div className="m-1">
                        <h1 className="text-success fw-bold">Telegram Factor Authentication</h1>
                        <br/>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quam lacus, cursus nec ante non, faucibus interdum enim. Maecenas dictum enim sit amet malesuada tempor. Curabitur at tempus risus. Mauris ultricies lorem elit, eu laoreet odio malesuada at. Suspendisse nec volutpat diam, finibus tristique purus. Nam ac dui et ligula malesuada feugiat. Sed eu sapien eu lectus aliquam mattis. Cras vitae lorem sed justo faucibus vestibulum. Sed a felis venenatis massa scelerisque efficitur at at lacus. Donec aliquam, lacus porttitor pretium placerat, enim ante ultricies neque, sit amet euismod neque mi id tellus. Donec nec gravida eros. Mauris scelerisque pretium ex a ornare. Vestibulum suscipit cursus metus sit amet pharetra. Nulla fermentum augue enim, at pretium elit mattis imperdiet. Aliquam lacus justo, laoreet ac turpis nec, aliquam maximus dolor.</h5>
                        <br/>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-lg btn-success fw-bold" onClick={() => history.push('/api')}>Get started</button>
                            <a className="btn btn-lg btn-link fw-bold text-success shadow" href='https://github.com/tele-fa' target='_blank'>View on Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;