try {
    throw '';
    throw {};
    throw 123;
    throw null;
} catch (error: unknown) {
    if (error instanceof Error) {
        console.log(error.message);

        // return
    }

    if (error instanceof MediaError) {
        console.log(error.code);

        // return
    }

    throw error;
}