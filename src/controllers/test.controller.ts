import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller("test")
export class TestController {

    @Get()
    test() {
        return {data: "test"}
    }
}