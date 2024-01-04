import { ApolloServer } from '@apollo/server';
import { typeDefs } from './schema/typeDefs.generated'
import { resolvers } from './schema/resolvers.generated'
import { handlers, startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';

// Set up Apollo Server
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

export const graphqlHandler = startServerAndCreateLambdaHandler(
	server,
	handlers.createAPIGatewayProxyEventV2RequestHandler(),
	{
		context: async ({ event }) => {
			return { event }
		}
	}
);
