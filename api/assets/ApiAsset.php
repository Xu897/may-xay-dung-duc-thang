<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace api\assets;

use common\assets\Html5shiv;
use yii\bootstrap\BootstrapAsset;
use yii\web\AssetBundle;
use yii\web\YiiAsset;

/**
 * api application asset
 */
class apiAsset extends AssetBundle
{
    /**
     * @var string
     */
    public $sourcePath = '@api/web/bundle';

    /**
     * @var array
     */
    public $css = [
        '/css/style.css',
    ];

    /**
     * @var array
     */
    public $js = [
        '/js/app.js',
    ];

    /**
     * @var array
     */
    public $depends = [
        YiiAsset::class,
        BootstrapAsset::class,
        Html5shiv::class,
    ];
}