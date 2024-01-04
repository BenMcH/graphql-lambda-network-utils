/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { ARecord } from './network-graphql-lambda/resolvers/ARecord';
import    { CName } from './network-graphql-lambda/resolvers/CName';
import    { dnsLookup as Query_dnsLookup } from './network-graphql-lambda/resolvers/Query/dnsLookup';
import    { myIp as Query_myIp } from './network-graphql-lambda/resolvers/Query/myIp';
    export const resolvers: Resolvers = {
      Query: { dnsLookup: Query_dnsLookup,myIp: Query_myIp },
      
      
      ARecord: ARecord,
CName: CName
    }