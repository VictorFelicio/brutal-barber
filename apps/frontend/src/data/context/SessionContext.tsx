/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { User } from '@brutalbarber/core';
import { createContext, useCallback, useEffect, useState } from 'react';
import cookie from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

interface SessionContextProps {
    user: User;
    token: string | null;
    isLoading: boolean;
    startSession: (token: string) => void;
    closeSession: () => void;
}

interface ISession {
    token: string | null;
    user: User | null;
}

export const SessionContext = createContext<SessionContextProps>(
    {} as SessionContextProps
);

export function SessionProvider({ children }: { children: React.ReactNode }) {
    const nameCookie = '_brutalbarber_token';

    const [isLoading, setIsLoading] = useState(true);
    const [session, setSession] = useState<ISession>({ token: null, user: null });

    function startSession(token: string) {
        cookie.set(nameCookie, token, { expires: 1 });
        const sessionUser = getSession();
        setSession(sessionUser);
    }

    function closeSession() {
        cookie.remove(nameCookie);
        setSession({ token: null, user: null });
        setIsLoading(false);
    }

    function getSession(): ISession {
        const token = cookie.get(nameCookie);

        if (!token) {
            return { token: null, user: null };
        }

        try {
            const tokenDecoded: any = jwtDecode(token);

            const isValidToken = tokenDecoded.exp! > Date.now() / 1000;

            if (!isValidToken) {
                return { token: null, user: null };
            }

            return {
                token,
                user: {
                    id: tokenDecoded?.id,
                    name: tokenDecoded?.name,
                    email: tokenDecoded?.email,
                    barber: tokenDecoded?.barber,
                    phone: tokenDecoded?.phone,
                },
            };
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            return { token: null, user: null };
        }
    }

    const loadSession = useCallback(function () {
        try {
            setIsLoading(true);
            const session = getSession();
            setSession(session);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        loadSession();
    }, [loadSession]);

    return (
        <SessionContext.Provider
            value={{
                user: session.user as User,
                token: session.token,
                isLoading,
                startSession,
                closeSession,
            }}
        >
            {children}
        </SessionContext.Provider>
    );
}
