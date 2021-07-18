<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class ArticleType extends Enum
{
    const QUESTION = "1";
    const INFORMATIONSHARING = "2";
    const TECHNOLOGYSHARING = "3";

    /**
     * valueから説明を返す
     */
    public static function getDescription($value): string
    {
        dump($value);
        switch($value) {
            case self::QUESTION:
                return '質問';
                break;
            case self::INFORMATIONSHARING:
                return '情報共有';
                break;
            default:
                return self::getKey($value);
        }
    }
}
