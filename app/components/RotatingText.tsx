"use client"

import { useState, useEffect } from 'react';

export function RotatingText({ roles, suffix }: { roles: string[]; suffix?: string }) {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setVisible(false), 3000);
        return () => clearTimeout(t);
    }, [index])

    useEffect(() => {
        if (visible) return;
        const t = setTimeout(() => {
            setIndex((i) => (i+1) % roles.length);
            setVisible(true);
        }, 1000);
        return () => clearTimeout(t);
    }, [visible, roles.length])

    return (
        <span> 
            <span className={`inline-block text-right transition-opacity duration-1000 min-w-[13rem] ${visible ? "opacity-100" : "opacity-0"}`}>
                {roles[index]}
            </span>
            {suffix ? <span> {suffix}</span> : null}
        </span>
    )
} 