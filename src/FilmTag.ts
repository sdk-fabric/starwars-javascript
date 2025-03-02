/**
 * FilmTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {TagAbstract, HttpRequest} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {Film} from "./Film";
import {FilmCollection} from "./FilmCollection";

export class FilmTag extends TagAbstract {
    /**
     * Get all the films
     *
     * @returns {Promise<FilmCollection>}
     * @throws {ClientException}
     */
    public async getAll(search?: string): Promise<FilmCollection> {
        const url = this.parser.url('/films', {
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
            return await response.json() as FilmCollection;
        }

        const statusCode = response.status;
        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }
    /**
     * Get a specific film
     *
     * @returns {Promise<Film>}
     * @throws {ClientException}
     */
    public async get(id: string): Promise<Film> {
        const url = this.parser.url('/films/:id', {
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
            return await response.json() as Film;
        }

        const statusCode = response.status;
        throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
    }



}
