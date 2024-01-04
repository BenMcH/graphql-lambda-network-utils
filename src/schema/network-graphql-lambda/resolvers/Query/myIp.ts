import type { QueryResolvers } from './../../../types.generated';
export const myIp: NonNullable<QueryResolvers['myIp']> = async (_parent, _arg, _ctx) => {
        // return JSON.stringify(_ctx.event)
        return _ctx.event.requestContext.http.sourceIp
};
