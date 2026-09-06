
# starwars-javascript

This [SDK](https://github.com/sdk-fabric/starwars-javascript) is managed by the [SDK Fabric](https://sdk-fabric.org/) project, a global infrastructure to
automatically generate SDKs for every API.

You can find more information about this SDK at [TypeHub](https://typehub.cloud/):
https://app.typehub.cloud/d/sdkfabric/starwars

## Usage

```typescript
const client = Client::build('[access_token]');

// Get all the people.
const response = await client.people().getall("search");

// Get a specific people.
const response = await client.people().get("id");

// Get all the films.
const response = await client.film().getall("search");

// Get a specific film.
const response = await client.film().get("id");

// Get all the starships.
const response = await client.starship().getall("search");

// Get a specific starship.
const response = await client.starship().get("id");

// Get all the species.
const response = await client.species().getall("search");

// Get a specific species.
const response = await client.species().get("id");

// Get all the vehicles.
const response = await client.vehicle().getall("search");

// Get a specific vehicle.
const response = await client.vehicle().get("id");

// Get all the planets.
const response = await client.planet().getall("search");

// Get a specific planet.
const response = await client.planet().get("id");
```
