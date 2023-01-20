import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function ButtonPage () {
    const handleClick = () => {
        console.log('Click!');
    };

    return (
        <div>
            <div>
                <Button className={'mb-5'} primary rounded onClick={handleClick}>
                    <GoBell />
                    Click me!
                </Button>
            </div>
            <div>
                <Button secondary rounded>
                    <GoCloudDownload />
                    Buy now
                </Button>
            </div>
            <div>
                <Button success outline rounded>
                    <GoDatabase />
                    See deal!
                </Button>
            </div>
            <div>
                <Button warning>Hide ads!</Button>
            </div>
            <div>
                <Button danger>Log out!!!</Button>
            </div>
        </div>
    );
};

export default ButtonPage;