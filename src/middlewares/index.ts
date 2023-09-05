import { handleErrors } from "./handleErrors.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyEmail } from "./verifyEmail.middleware";
import { verifyId } from "./verifyId.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { verifyPermition } from "./verifyPermition.middleware";
import { verifyName } from "./verifyName.middleware";
import { verifyAddress } from "./verifyAddress.middleware";

export default { handleErrors, validateBody, verifyEmail, verifyId, verifyToken, verifyPermition, verifyName, verifyAddress };