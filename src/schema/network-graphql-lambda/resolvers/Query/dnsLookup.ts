import { Resolver } from 'node:dns/promises'

const dnsResolver = new Resolver()

dnsResolver.setServers(["1.1.1.1", "1.0.0.1"])

import type { QueryResolvers } from './../../../types.generated';
export const dnsLookup: NonNullable<QueryResolvers['dnsLookup']> = async (_parent, _arg, _ctx) => {
        const address = _arg.address
        try {
                const cNames = await dnsResolver.resolveCname(address)

                if (cNames.length) {
                        return cNames.map(cname => ({
                                __typename: "CName",
                                hostname: cname
                        }))
                }
        } catch { }

        try {
                const aRecord = await dnsResolver.resolve4(address, {
                        ttl: true
                })


                return aRecord.map(a => ({
                        __typename: 'ARecord',
                        address: a.address,
                        ttl: a.ttl
                }))
        } catch { }
        return []
};
