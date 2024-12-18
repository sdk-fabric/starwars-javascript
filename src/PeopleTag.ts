/**
 * PeopleTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {People} from "./People";
import {PeopleCollection} from "./PeopleCollection";

export class PeopleTag extends TagAbstract {
    /**
     * Get all the people
     *
     * @returns {Promise<PeopleCollection>}
     * @throws {ClientException}
     */
    public async getAll(search?: string): Promise<PeopleCollection> {
        const url = this.parser.url('/people', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
                'search': search,
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<PeopleCollection>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                const statusCode = error.response.status;

                throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * Get a specific people
     *
     * @returns {Promise<People>}
     * @throws {ClientException}
     */
    public async get(id: string): Promise<People> {
        const url = this.parser.url('/people/:id', {
            'id': id,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            headers: {
            },
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<People>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                const statusCode = error.response.status;

                throw new UnknownStatusCodeException('The server returned an unknown status code: ' + statusCode);
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }


}
