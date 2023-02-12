import { render } from '@testing-library/react';
import W12MForm from './W12MForm';

test('renders form element', () => {

	const { container } = render(<W12MForm />);

	expect(container.firstChild).toHaveClass('w12MForm');

});
