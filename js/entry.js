import '../css/main.scss';
import PageController from './controller';

$(() => {
    particlesJS.load('particles', 'config/particles.json');
    let controller = new PageController();
});
