import ForceAuth from '@/components/shared/ForceAuth';

export default function Layout(props: any) {
    return <ForceAuth>{props.children}</ForceAuth>;
}
