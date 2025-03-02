/**
 * SpeciesTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {TagAbstract, HttpRequest} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {Species} from "./Species";
import {SpeciesCollection} from "./SpeciesCollection";

export class SpeciesTag extends TagAbstract {
    /**
     * Get all the species
     *
     * @returns {Promise<SpeciesCollection>}
     * @throws {ClientException}
     */
    public async getAll(search?: string): Promise<SpeciesCollection> {
        const url = this.parser.url('/species', {
        });

        let request: HttpRequest = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
                'search': search,
            }, [
            ]),
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as SpeciesCollection;
        }

        const statusCode = response.status;
        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * Get a specific species
     *
     * @returns {Promise<Species>}
     * @throws {ClientException}
     */
    public async get(id: string): Promise<Species> {
        const url = this.parser.url('/species/:id', {
            'id': id,
        });

        let request: HttpRequest = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
            }, [
            ]),
        };

        const response = await this.httpClient.request(request);
        if (response.ok) {
            return await response.json() as Species;
        }

        const statusCode = response.status;
        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }



}
