import { SVGProps } from 'react';

declare module '@heroicons/react/24/outline'{
    const content: {
        [key: string]: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    };
    export default content;
};