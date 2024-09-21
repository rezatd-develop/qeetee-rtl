import { GetRequest } from "../../../baseServices/BaseServices";
import { routes } from "../../../routes/routes";

export const GetApProductsList = (parameters, result, resolve) => GetRequest(routes.admin.product.products, parameters, result, resolve);