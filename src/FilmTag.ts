/**
 * FilmTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {Film} from "./Film";
import {FilmCollection} from "./FilmCollection";

export class FilmTag extends TagAbstract {
    /**
     * Get all the film resources
     *
     * @returns {Promise<FilmCollection>}
     * @throws {ClientException}
     */
    public async getAll(search?: string): Promise<FilmCollection> {
        const url = this.parser.url('/films', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'search': search,
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<FilmCollection>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * Get a specific film resource
     *
     * @returns {Promise<Film>}
     * @throws {ClientException}
     */
    public async get(id: string): Promise<Film> {
        const url = this.parser.url('/films/:id', {
            'id': id,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<Film>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }


}
