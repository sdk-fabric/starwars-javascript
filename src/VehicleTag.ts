/**
 * VehicleTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {Vehicle} from "./Vehicle";
import {VehicleCollection} from "./VehicleCollection";

export class VehicleTag extends TagAbstract {
    /**
     * @returns {Promise<VehicleCollection>}
     * @throws {ClientException}
     */
    public async getAll(search?: string): Promise<VehicleCollection> {
        const url = this.parser.url('/vehicles', {
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
            const response = await this.httpClient.request<VehicleCollection>(params);
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
     * @returns {Promise<Vehicle>}
     * @throws {ClientException}
     */
    public async get(id: string): Promise<Vehicle> {
        const url = this.parser.url('/vehicles/:id', {
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
            const response = await this.httpClient.request<Vehicle>(params);
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