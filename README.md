# **DenoStore Demo Page**

DenoStore brings modular and low latency caching of GraphQL queries to a Deno/Oak server.


## Table of Contents

- [Description](#description)
- [Features](#features)
- [Documentation](#documentation)
- [Developers](#developers)

## <a name="description"></a> Description

When implementing caching of GraphQL queries there are a few main issues to consider:

- Cache becoming stale/cache invalidation
- More unique queries and results compared to REST due to granularity of GraphQL
- Lack of built-in caching support (especially for Deno)

DenoStore was built to address the above challenges and empowers users with a caching tool that is modular, efficient and quick to implement.

## <a name="features"></a> Features

- Seamlessly embeds caching functionality at query resolver level, giving implementing user modular decision making power to cache specific queries and not others
- Caches resolver results rather than query results - so subsequent queries with different fields and formats can still receive existing cached values
- Leverages _[Redis](https://redis.io/)_ as an in-memory low latency server-side cache
- Integrates with _[Oak](https://oakserver.github.io/oak/)_ middleware framework to handle GraphQL queries with error handling
- Provides global and resolver level expiration controls
- Makes _GraphQL Playground IDE_ available for constructing and sending queries during development
- Supports all GraphQL query options (e.g. arguments, directives, variables, fragments)


## <a name="documentation"></a> Documentation

http://denostore.io/docs

## <a name="developers"></a> Developers

- [Jake Van Vorhis](https://github.com/jakedoublev)
- [James Kim](https://github.com/Jamesmjkim)
- [Jessica Wachtel](https://github.com/JessicaWachtel)
- [Scott Tatsuno](https://github.com/sktatsuno)
- [TX Ho](https://github.com/lawauditswe)