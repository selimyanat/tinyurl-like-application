"use client";

import React, { Suspense } from "react";
import { URLShortener } from "./features/url-shortener/components/URLShortener";
import {URLShortenerV2} from "./features/url-shortener/components/URLShortenerV2";

const RootPage = () => {
    return (
        <main
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <Suspense fallback={<p>Loading...</p>}>
                <URLShortenerV2 />
            </Suspense>
        </main>
    );
};

export default RootPage;
