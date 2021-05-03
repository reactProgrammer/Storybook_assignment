import {Primary,Secondary,CustomeColor} from './Button.stories';
import {render,screen} from '@testing-library/react';

test('Should render primary button',()=>{
    render(<Primary {...Primary.args}/>);
    expect(screen.getByRole('button')).toHaveTextContent(/Button/i);
});


test('Should render secondary button',()=>{
    render(<Secondary {...Secondary.args}/>);
    expect(screen.getByRole('button')).toHaveTextContent(/Button/i);
});

test('should render a custom color',()=>{
    render(<CustomeColor {...CustomeColor.args}/>);
    expect(screen.getByRole("button")).toHaveStyle(
        `background-color:${CustomeColor.args.backgroundColor}`
    );
})