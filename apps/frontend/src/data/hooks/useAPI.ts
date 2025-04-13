import { useSession } from './useSession';

export default function useAPI() {
    const apiURL = process.env.NEXT_PUBLIC_API_URL;
    const { token } = useSession();

    async function extractData(res: Response) {
        let content = '';
        try {
            content = await res.text();
            return JSON.parse(content);
        } catch (e) {
            return content;
        }
    }

    async function apiHttpGet(url: string) {
        const path = url.startsWith('/') ? url : `/${url}`;

        const fullPath = `${apiURL}${path}`;

        const response = await fetch(fullPath, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return extractData(response);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async function apiHttpPost(url: string, body: any) {
        const path = url.startsWith('/') ? url : `/${url}`;

        const fullPath = `${apiURL}${path}`;

        const response = await fetch(fullPath, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        });

        return extractData(response);
    }

    return { apiHttpGet, apiHttpPost };
}
