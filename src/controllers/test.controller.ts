import { Controller, Get, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller("test")
export class TestController {

    @Get()
    test() {
        return {data: "test"}
    }
}