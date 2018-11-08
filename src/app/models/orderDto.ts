/**
 * Simple Inventory API
 * This is a simple API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CartItemDto } from './cartItemDto';


export interface OrderDto {
    orderId: string;
    orderItems: Array<CartItemDto>;
    time?: Date;
    sum?: number;
    status?: string;
    tableId?: string;
    type?: string;
    ownerId?: string;
    ownerName?: string;
    address?: string;
    rating?: number;
    discount?: number;
}
