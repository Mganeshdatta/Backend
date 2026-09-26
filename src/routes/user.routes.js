import { Router } from "express";
import { loginUser, registerUser, logoutUser, refreshAccessToken, changeCurrentPassword,getCurrentUser, updataAccountDetails, updataUserAvatar, updataUserCoverImage, getUserChannelProfile, getWatchHistory} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()


router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser)

router.route("/login").post(loginUser)

//secure.routes
router.route("/logout").post(
    verifyJWT,
    logoutUser)

router.route("/refresh-token").post(refreshAccessToken)

router.route("/change-password").post(verifyJWT, changeCurrentPassword)

router.route("/current-user").get(verifyJWT, getCurrentUser)

router.route("/update-account-details").patch(updataAccountDetails)

router.route("/update-avatar").post(
    verifyJWT,
    upload.single("avatar"),
    updataUserAvatar)

router.route("/update-coverImage").post(
    verifyJWT,
    upload.single("coverImage"),
    updataUserCoverImage)

router.route("/c/:username").get(verifyJWT, getUserChannelProfile)

router.route("/history").get(verifyJWT, getWatchHistory)

export default router