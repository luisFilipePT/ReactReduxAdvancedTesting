import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });

    // Use 'it' to test a single attribute of a target
    it('Shows a comment box', () => {
        expect(component.find('.comment-box')).to.exist;
    });

    it('Shows a comment list', () => {
        expect(component.find('.comment-list')).to.exist;
    });

});