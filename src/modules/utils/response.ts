export const standardResponse = (data: Object | [] | null, message: string, status: string) => {
    try {
        return {
          data,
          message,
          status,
        };
    } catch (error) {
        return {
          data: error,
          message: 'Ha ocurrido un error!',
          status: "error",
        };
    }
};
